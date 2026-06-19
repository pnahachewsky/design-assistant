import { TestBed } from '@angular/core/testing';

import { ShadowDomService } from './shadowdom.service';

describe('ShadowdomService', () => {
  let service: ShadowDomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShadowDomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('ignores a stale selection outside the active shadow root', () => {
    const host = document.createElement('div');
    const shadowRoot = host.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = '<span data-id="1">Current content</span>';
    const outside = document.createElement('p');
    outside.textContent = 'Stale selected content';
    document.body.append(host, outside);

    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(outside);
    selection?.removeAllRanges();
    selection?.addRange(range);
    service.lastSelection = { count: 1, startId: 1, endId: 1 };

    service.highlightSelected(shadowRoot);

    expect(service.lastSelection).toEqual({
      count: 0,
      startId: null,
      endId: null,
    });

    selection?.removeAllRanges();
    host.remove();
    outside.remove();
  });
});
