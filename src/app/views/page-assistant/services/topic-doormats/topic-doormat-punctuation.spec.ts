import {
  cleanTopicDoormatDescriptionTrailingPunctuation,
  cleanTopicDoormatLinkTrailingPunctuation,
} from './topic-doormat-punctuation';

describe('topic doormat punctuation', () => {
  it('removes all trailing punctuation from every doormat description', () => {
    const doc = new DOMParser().parseFromString(
      `
        <section class="gc-srvinfo">
          <div>
            <h3><a href="/same">First link...</a></h3>
            <p>First description...</p>
          </div>
          <div>
            <h3><a href="/same">Second link?</a></h3>
            <p>Second description?</p>
          </div>
          <div>
            <h3><a href="/third">Third link\u2026</a></h3>
            <p>Third description\u2026</p>
          </div>
        </section>
      `,
      'text/html',
    );

    expect(cleanTopicDoormatDescriptionTrailingPunctuation(doc)).toBe(3);
    expect(cleanTopicDoormatLinkTrailingPunctuation(doc)).toBe(3);
    expect(
      Array.from(doc.querySelectorAll('.gc-srvinfo p')).map((item) =>
        item.textContent?.trim(),
      ),
    ).toEqual([
      'First description',
      'Second description',
      'Third description',
    ]);
    expect(
      Array.from(doc.querySelectorAll('.gc-srvinfo a')).map((item) =>
        item.textContent?.trim(),
      ),
    ).toEqual(['First link', 'Second link', 'Third link']);
  });

  it('preserves inline markup, labels, and content outside doormats', () => {
    const doc = new DOMParser().parseFromString(
      `
        <p id="outside">Outside paragraph.</p>
        <section class="gc-srvinfo">
          <div>
            <h3>
              <a href="/one">Link text.<span class="label label-info">New</span></a>
            </h3>
            <p>Read <strong>important details.</strong><span class="label label-warning">Updated.</span></p>
          </div>
        </section>
      `,
      'text/html',
    );

    cleanTopicDoormatDescriptionTrailingPunctuation(doc);
    cleanTopicDoormatLinkTrailingPunctuation(doc);

    expect(doc.querySelector('.gc-srvinfo p')?.innerHTML).toBe(
      'Read <strong>important details</strong><span class="label label-warning">Updated.</span>',
    );
    expect(doc.querySelector('.gc-srvinfo a')?.innerHTML).toBe(
      'Link text<span class="label label-info">New</span>',
    );
    expect(doc.querySelector('#outside')?.textContent).toBe(
      'Outside paragraph.',
    );
  });

});
