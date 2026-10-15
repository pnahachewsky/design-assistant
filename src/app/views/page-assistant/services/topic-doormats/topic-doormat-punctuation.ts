const TRAILING_DOORMAT_PUNCTUATION = /\s*[.:;?!,\u2026]+\s*$/u;
const DOORMAT_LABEL_SELECTOR =
  '.label, .badge, [class*="label-"], [class*="badge-"]';

export function cleanTopicDoormatLinkTrailingPunctuation(
  root: ParentNode,
): number {
  return Array.from(
    root.querySelectorAll<HTMLAnchorElement>(
      '.gc-srvinfo h2 a[href], .gc-srvinfo h3 a[href]',
    ),
  ).reduce(
    (cleanedCount, link) =>
      cleanedCount +
      cleanElementTrailingPunctuation(link, DOORMAT_LABEL_SELECTOR),
    0,
  );
}

export function cleanTopicDoormatDescriptionTrailingPunctuation(
  root: ParentNode,
): number {
  const descriptions = new Set<HTMLParagraphElement>();

  Array.from(
    root.querySelectorAll<HTMLAnchorElement>(
      '.gc-srvinfo h2 a[href], .gc-srvinfo h3 a[href]',
    ),
  ).forEach((link) => {
    const section = link.closest('.gc-srvinfo');
    if (!section) return;

    let current: Element | null = link.parentElement;
    while (current && current !== section) {
      const description = current.querySelector<HTMLParagraphElement>('p');
      if (description) {
        descriptions.add(description);
        return;
      }
      current = current.parentElement;
    }
  });

  let cleanedCount = 0;
  descriptions.forEach((description) => {
    cleanedCount += cleanTopicDoormatDescriptionElementTrailingPunctuation(
      description,
    );
  });

  return cleanedCount;
}

export function cleanTopicDoormatDescriptionElementTrailingPunctuation(
  description: HTMLParagraphElement,
): number {
  return cleanElementTrailingPunctuation(
    description,
    DOORMAT_LABEL_SELECTOR,
  );
}

function cleanElementTrailingPunctuation(
  element: Element,
  excludedAncestorSelector?: string,
): number {
  const textNodes: Text[] = [];
  const walker = element.ownerDocument.createTreeWalker(
    element,
    NodeFilter.SHOW_TEXT,
  );
  let node = walker.nextNode();
  while (node) {
    const textNode = node as Text;
    if (
      !excludedAncestorSelector ||
      !textNode.parentElement?.closest(excludedAncestorSelector)
    ) {
      textNodes.push(textNode);
    }
    node = walker.nextNode();
  }

  for (let index = textNodes.length - 1; index >= 0; index -= 1) {
    const textNode = textNodes[index];
    if (!textNode.data.trim()) continue;
    const cleaned = textNode.data.replace(TRAILING_DOORMAT_PUNCTUATION, '');
    if (cleaned === textNode.data) return 0;
    textNode.data = cleaned;
    return 1;
  }

  return 0;
}
