import { TopicDoormatPageLanguage } from './topic-doormat.types';

export type TopicDoormatExampleFormat = 'final-only' | 'before-after';

interface TopicDoormatRewriteExampleItem {
  position?: unknown;
  linkText?: unknown;
  before?: unknown;
  after?: unknown;
  issueTags?: unknown;
  changeType?: unknown;
  reason?: unknown;
  contextPositions?: unknown;
  destinationEvidence?: unknown;
}

interface TopicDoormatRewriteExampleSet {
  items?: unknown;
}

export interface TopicDoormatRewriteExample {
  id?: unknown;
  pageTopic?: unknown;
  sets?: Partial<Record<TopicDoormatPageLanguage, TopicDoormatRewriteExampleSet>>;
}

interface MatchedItem {
  example: TopicDoormatRewriteExample;
  item: TopicDoormatRewriteExampleItem;
}

const MAX_MATCHED_ITEMS = 2;
const MAX_TOTAL_ITEMS = 3;

export function selectTopicDoormatExamples(
  examples: TopicDoormatRewriteExample[],
  pageLanguage: TopicDoormatPageLanguage,
  issueIds: string[],
  format: TopicDoormatExampleFormat,
): Record<string, unknown>[] {
  const selectedIssueIds = new Set(issueIds.filter(Boolean));
  if (!selectedIssueIds.size) return [];

  const matched: MatchedItem[] = [];
  for (const example of examples) {
    for (const item of getItems(example, pageLanguage)) {
      if (!getStrings(item.issueTags).some((tag) => selectedIssueIds.has(tag))) continue;
      matched.push({ example, item });
      if (matched.length === MAX_MATCHED_ITEMS) break;
    }
    if (matched.length === MAX_MATCHED_ITEMS) break;
  }
  if (!matched.length) return [];

  const selected = [...matched];
  const context = findContextItem(matched, pageLanguage);
  if (context && selected.length < MAX_TOTAL_ITEMS) selected.push(context);

  const grouped = new Map<TopicDoormatRewriteExample, TopicDoormatRewriteExampleItem[]>();
  for (const selection of selected) {
    const items = grouped.get(selection.example) ?? [];
    if (!items.includes(selection.item)) items.push(selection.item);
    grouped.set(selection.example, items);
  }

  return Array.from(grouped, ([example, items]) => ({
    id: example.id,
    pageTopic: example.pageTopic,
    selectedLanguage: pageLanguage,
    items: items.map((item) => formatItem(item, format)),
  }));
}

function findContextItem(
  matched: MatchedItem[],
  pageLanguage: TopicDoormatPageLanguage,
): MatchedItem | null {
  for (const selection of matched) {
    const items = getItems(selection.example, pageLanguage);
    for (const position of getNumbers(selection.item.contextPositions)) {
      const item = items.find((candidate) => candidate.position === position);
      if (item && !matched.some((entry) => entry.item === item)) {
        return { example: selection.example, item };
      }
    }
  }

  for (const selection of matched) {
    const item = getItems(selection.example, pageLanguage).find(
      (candidate) =>
        candidate.changeType === 'unchanged' &&
        !matched.some((entry) => entry.item === candidate),
    );
    if (item) return { example: selection.example, item };
  }
  return null;
}

function getItems(
  example: TopicDoormatRewriteExample,
  pageLanguage: TopicDoormatPageLanguage,
): TopicDoormatRewriteExampleItem[] {
  const items = example.sets?.[pageLanguage]?.items;
  if (!Array.isArray(items)) return [];
  return items.filter(
    (item): item is TopicDoormatRewriteExampleItem =>
      !!item && typeof item === 'object' && !Array.isArray(item),
  );
}

function formatItem(
  item: TopicDoormatRewriteExampleItem,
  format: TopicDoormatExampleFormat,
): Record<string, unknown> {
  if (format === 'final-only') {
    return compact({
      position: item.position,
      linkText: item.linkText,
      description: item.after,
    });
  }

  return compact({
    position: item.position,
    linkText: item.linkText,
    before: item.before,
    after: item.after,
    issueTags: item.issueTags,
    changeType: item.changeType,
    reason: item.reason,
    destinationEvidence: item.destinationEvidence,
  });
}

function compact(value: Record<string, unknown>): Record<string, unknown> {
  return Object.fromEntries(
    Object.entries(value).filter(([, item]) => item !== undefined),
  );
}

function getStrings(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === 'string')
    : [];
}

function getNumbers(value: unknown): number[] {
  return Array.isArray(value)
    ? value.filter((item): item is number => typeof item === 'number')
    : [];
}
