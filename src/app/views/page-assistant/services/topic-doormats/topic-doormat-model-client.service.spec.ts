import { TestBed } from '@angular/core/testing';
import { OpenRouterService } from '../openrouter.service';
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
    ]) as jasmine.SpyObj<OpenRouterService> & {
      models: string[];
      freeModels: string[];
    };
    openRouter.models = ['selected-model', 'fallback-model'];
    openRouter.freeModels = ['fallback-model', 'selected-model'];

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
      jasmine.objectContaining({ timeoutMs: 120000 }),
    );
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
      jasmine.objectContaining({ timeoutMs: 120000 }),
    );
    expect(debug).toHaveBeenCalledWith(
      'model json repair succeeded',
      jasmine.objectContaining({ model: 'selected-model' }),
    );
  });
});
