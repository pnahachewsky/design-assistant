const TRAILING_DOORMAT_DESCRIPTION_PUNCTUATION = /\s*[.:;?!,…]+\s*$/u;

export function removeFinalTopicDoormatDescriptionPunctuation(
  value: string | null | undefined,
): string {
  return (value || '')
    .replace(TRAILING_DOORMAT_DESCRIPTION_PUNCTUATION, '')
    .trim();
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
    const textNodes: Text[] = [];
    const walker = description.ownerDocument.createTreeWalker(
      description,
      NodeFilter.SHOW_TEXT,
    );
    let node = walker.nextNode();
    while (node) {
      textNodes.push(node as Text);
      node = walker.nextNode();
    }

    for (let index = textNodes.length - 1; index >= 0; index -= 1) {
      const textNode = textNodes[index];
      if (!textNode.data.trim()) continue;
      const cleaned = textNode.data.replace(
        TRAILING_DOORMAT_DESCRIPTION_PUNCTUATION,
        '',
      );
      if (cleaned !== textNode.data) {
        textNode.data = cleaned;
        cleanedCount += 1;
      }
      break;
    }
  });

  return cleanedCount;
}
