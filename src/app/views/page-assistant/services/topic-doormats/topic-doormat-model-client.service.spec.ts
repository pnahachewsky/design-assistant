import { TestBed } from '@angular/core/testing';
import { OpenRouterService } from '../openrouter.service';
import { AiModel } from '../../data/data.model';
import { TopicDoormatModelClientService } from './topic-doormat-model-client.service';
import { TopicDoormatSummary } from './topic-doormat.types';

describe('TopicDoormatModelClientService', () => {
  let service: TopicDoormatModelClientService;
  let openRouter: jasmine.SpyObj<OpenRouterService> & {
    models: string[];
    freeModels: string[];
  };

  const doormatSummaries = [
    {
      index: 1,
      linkText: 'Payments',
      href: '/payments',
      description: 'Payment options',
      headingLevel: 3,
      itemLinkCount: 1,
      headingLinkCount: 1,
      descriptionLinkCount: 0,
      hasSplitHeadingLink: false,
      hasDescriptionLink: false,
      hasDescriptionIconOrImage: false,
      hasDescriptionSpecialFormatting: false,
      rawItemText: 'Payments Payment options',
      linkTextCharacterCount: 8,
      descriptionCharacterCount: 15,
      sectionIndex: 1,
      sectionTitle: 'Services',
      sectionItemIndex: 1,
      sectionDoormatCount: 1,
    },
  ] satisfies TopicDoormatSummary[];

  beforeEach(() => {
    openRouter = jasmine.createSpyObj<OpenRouterService>('OpenRouterService', [
      'call',
      'buildResponseMetadata',
    ]) as jasmine.SpyObj<OpenRouterService> & {
      models: string[];
      freeModels: string[];
    };
    openRouter.models = ['selected-model', 'fallback-model'];
    openRouter.freeModels = ['fallback-model', 'selected-model'];
    openRouter.buildResponseMetadata.and.returnValue({
      receivedResponse: true,
      choiceCount: 1,
    });

    TestBed.configureTestingModule({
      providers: [
        TopicDoormatModelClientService,
        { provide: OpenRouterService, useValue: openRouter },
      ],
    });
    service = TestBed.inject(TopicDoormatModelClientService);
  });

  it('tries the selected model before the fallback models', async () => {
    openRouter.call.and.resolveTo({
      choices: [{ message: { content: '{"doormats":[]}' } }],
    } as any);
    const debug = jasmine.createSpy('debug');

    const result = await service.requestIssueJson({
      messages: [{ role: 'user', content: '{}' }],
      requestedModel: 'selected-model',
      doormatSummaries,
      isParseableResponseText: () => true,
      debug,
    });

    expect(result.modelRotation).toEqual(['selected-model', 'fallback-model']);
    expect(result.model).toBe('selected-model');
    expect(openRouter.call.calls.first().args[0]).toBe('selected-model');
    expect(openRouter.call.calls.first().args[2]).toEqual(
      jasmine.objectContaining({
        timeoutMs: TopicDoormatModelClientService.modelAttemptTimeoutMs,
      }),
    );
    expect(debug).toHaveBeenCalledWith(
      'model attempt started',
      jasmine.objectContaining({
        model: 'selected-model',
        request: jasmine.objectContaining({
          messageCount: 1,
          totalCharacters: 2,
          messageCharacterCounts: [2],
          roleCharacterCounts: jasmine.objectContaining({ user: 2 }),
          doormatCount: 1,
          destinationContextAvailableCount: 0,
        }),
      }),
    );
  });

  it('retries a paid selected model once before free fallback models', () => {
    openRouter.models = ['paid-model', 'fallback-model'];
    openRouter.freeModels = ['fallback-model'];

    expect(service.buildModelRotation('paid-model')).toEqual([
      'paid-model',
      'paid-model',
      'fallback-model',
    ]);
  });

  it('does not duplicate a free selected model before fallback models', () => {
    openRouter.models = ['free-model', 'fallback-model'];
    openRouter.freeModels = ['fallback-model', 'free-model'];

    expect(service.buildModelRotation('free-model')).toEqual([
      'free-model',
      'fallback-model',
    ]);
  });

  it('keeps the free router last when it is selected for topic doormat analysis', () => {
    openRouter.models = [
      'free-model-a',
      'free-model-b',
      AiModel.FreeModelsRouter,
    ];
    openRouter.freeModels = [
      'free-model-a',
      'free-model-b',
      AiModel.FreeModelsRouter,
    ];

    expect(service.buildModelRotation(AiModel.FreeModelsRouter)).toEqual([
      'free-model-a',
      'free-model-b',
      AiModel.FreeModelsRouter,
    ]);
  });

  it('rotates to the next model when a topic doormat attempt times out', async () => {
    openRouter.call.and.returnValues(
      Promise.reject(new Error('OpenRouter request timed out')),
      Promise.resolve(
        { choices: [{ message: { content: '{"doormats":[]}' } }] } as any,
      ),
    );
    const debug = jasmine.createSpy('debug');

    const result = await service.requestIssueJson({
      messages: [{ role: 'user', content: '{}' }],
      requestedModel: 'selected-model',
      doormatSummaries,
      isParseableResponseText: () => true,
      debug,
    });

    expect(result.model).toBe('fallback-model');
    expect(openRouter.call.calls.allArgs().map((args) => args[0])).toEqual([
      'selected-model',
      'fallback-model',
    ]);
    expect(debug).toHaveBeenCalledWith(
      'model attempt failed',
      jasmine.objectContaining({
        model: 'selected-model',
        error: 'OpenRouter request timed out',
      }),
    );
  });

  it('logs OpenRouter metadata when an attempt returns empty content', async () => {
    const emptyResponse = {
      id: 'response-id',
      model: 'selected-model',
      choices: [
        {
          finish_reason: 'stop',
          native_finish_reason: 'stop',
          message: { role: 'assistant', content: '' },
        },
      ],
      usage: { prompt_tokens: 10, completion_tokens: 0 },
    } as any;
    openRouter.call.and.returnValues(
      Promise.resolve(emptyResponse),
      Promise.resolve(
        { choices: [{ message: { content: '{"doormats":[]}' } }] } as any,
      ),
    );
    openRouter.buildResponseMetadata.and.returnValue({
      receivedResponse: true,
      id: 'response-id',
      responseModel: 'selected-model',
      choiceCount: 1,
      choices: [
        {
          finishReason: 'stop',
          nativeFinishReason: 'stop',
          contentCharacters: 0,
          trimmedContentCharacters: 0,
        },
      ],
      usage: { prompt_tokens: 10, completion_tokens: 0 },
    });
    const debug = jasmine.createSpy('debug');

    await service.requestIssueJson({
      messages: [{ role: 'user', content: '{}' }],
      requestedModel: 'selected-model',
      doormatSummaries,
      isParseableResponseText: () => true,
      debug,
    });

    expect(openRouter.buildResponseMetadata).toHaveBeenCalledWith(emptyResponse);
    expect(debug).toHaveBeenCalledWith(
      'model attempt returned empty content',
      jasmine.objectContaining({
        model: 'selected-model',
        response: jasmine.objectContaining({
          id: 'response-id',
          choiceCount: 1,
          choices: [
            jasmine.objectContaining({
              finishReason: 'stop',
              contentCharacters: 0,
            }),
          ],
        }),
      }),
    );
  });

  it('treats zero-choice OpenRouter responses as provider failures', async () => {
    const zeroChoiceResponse = {
      id: '',
      model: '',
      choices: [],
    } as any;
    openRouter.call.and.returnValues(
      Promise.resolve(zeroChoiceResponse),
      Promise.resolve(
        { choices: [{ message: { content: '{"doormats":[]}' } }] } as any,
      ),
    );
    openRouter.buildResponseMetadata.and.returnValue({
      receivedResponse: true,
      id: '',
      responseModel: '',
      choiceCount: 0,
      choices: [],
    });
    const debug = jasmine.createSpy('debug');

    const result = await service.requestIssueJson({
      messages: [{ role: 'user', content: '{}' }],
      requestedModel: 'selected-model',
      doormatSummaries,
      isParseableResponseText: () => true,
      debug,
    });

    expect(result.model).toBe('fallback-model');
    expect(debug).toHaveBeenCalledWith(
      'model attempt failed',
      jasmine.objectContaining({
        model: 'selected-model',
        error: 'OpenRouter provider returned no choices for selected-model.',
        response: jasmine.objectContaining({
          receivedResponse: true,
          choiceCount: 0,
        }),
      }),
    );
  });

  it('repairs invalid model JSON with the same model', async () => {
    openRouter.call.and.returnValues(
      Promise.resolve({ choices: [{ message: { content: 'not json' } }] } as any),
      Promise.resolve(
        { choices: [{ message: { content: '{"doormats":[]}' } }] } as any,
      ),
    );
    const debug = jasmine.createSpy('debug');

    const result = await service.requestIssueJson({
      messages: [{ role: 'user', content: '{}' }],
      requestedModel: 'selected-model',
      doormatSummaries,
      isParseableResponseText: (text) => text.startsWith('{'),
      debug,
    });

    expect(result.text).toBe('{"doormats":[]}');
    expect(openRouter.call.calls.allArgs()[1][0]).toBe('selected-model');
    expect(openRouter.call.calls.allArgs()[1][2]).toEqual(
      jasmine.objectContaining({
        timeoutMs: TopicDoormatModelClientService.modelAttemptTimeoutMs,
      }),
    );
    expect(debug).toHaveBeenCalledWith(
      'model json repair succeeded',
      jasmine.objectContaining({ model: 'selected-model' }),
    );
  });

  it('requests issue field repair with the supplied model', async () => {
    openRouter.call.and.resolveTo({
      choices: [{ message: { content: '{"repairs":[]}' } }],
    } as any);
    const debug = jasmine.createSpy('debug');

    const result = await service.requestIssueFieldRepair({
      model: 'selected-model',
      messages: [{ role: 'user', content: '{"incompleteIssues":[]}' }],
      doormatSummaries,
      debug,
    });

    expect(result).toBe('{"repairs":[]}');
    expect(openRouter.call.calls.first().args[0]).toBe('selected-model');
    expect(openRouter.call.calls.first().args[2]).toEqual(
      jasmine.objectContaining({
        title: 'Content Assistant - Topic Doormat Issue Field Repair',
        timeoutMs: TopicDoormatModelClientService.modelAttemptTimeoutMs,
      }),
    );
    expect(debug).toHaveBeenCalledWith(
      'model issue field repair request prepared',
      jasmine.objectContaining({ model: 'selected-model' }),
    );
  });
});
