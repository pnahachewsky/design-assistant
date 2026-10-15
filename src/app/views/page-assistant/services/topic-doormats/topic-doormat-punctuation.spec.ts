import {
  cleanTopicDoormatDescriptionTrailingPunctuation,
  removeFinalTopicDoormatDescriptionPunctuation,
} from './topic-doormat-punctuation';

describe('topic doormat punctuation', () => {
  it('removes all trailing punctuation from every doormat description', () => {
    const doc = new DOMParser().parseFromString(
      `
        <section class="gc-srvinfo">
          <div>
            <h3><a href="/same">First link</a></h3>
            <p>First description...</p>
          </div>
          <div>
            <h3><a href="/same">Second link</a></h3>
            <p>Second description?</p>
          </div>
          <div>
            <h3><a href="/third">Third link</a></h3>
            <p>Third description…</p>
          </div>
        </section>
      `,
      'text/html',
    );

    expect(cleanTopicDoormatDescriptionTrailingPunctuation(doc)).toBe(3);
    expect(
      Array.from(doc.querySelectorAll('.gc-srvinfo p')).map((item) =>
        item.textContent?.trim(),
      ),
    ).toEqual([
      'First description',
      'Second description',
      'Third description',
    ]);
  });

  it('preserves inline markup and content outside doormat descriptions', () => {
    const doc = new DOMParser().parseFromString(
      `
        <p id="outside">Outside paragraph.</p>
        <section class="gc-srvinfo">
          <div>
            <h3><a href="/one">Link text.</a></h3>
            <p>Read <strong>important details.</strong></p>
          </div>
        </section>
      `,
      'text/html',
    );

    cleanTopicDoormatDescriptionTrailingPunctuation(doc);

    expect(doc.querySelector('.gc-srvinfo p')?.innerHTML).toBe(
      'Read <strong>important details</strong>',
    );
    expect(doc.querySelector('.gc-srvinfo a')?.textContent).toBe('Link text.');
    expect(doc.querySelector('#outside')?.textContent).toBe(
      'Outside paragraph.',
    );
  });

  it('removes repeated final punctuation from text values', () => {
    expect(removeFinalTopicDoormatDescriptionPunctuation('Description... ')).toBe(
      'Description',
    );
    expect(removeFinalTopicDoormatDescriptionPunctuation('Description')).toBe(
      'Description',
    );
  });
});
