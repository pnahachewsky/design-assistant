export type RubricDimensionId =
  | 'trigger_match'
  | 'false_trigger_avoidance'
  | 'instruction_following'
  | 'output_quality'
  | 'safety';

export type RubricScore = 0 | 1 | 2;

export interface RubricDimension {
  id: RubricDimensionId;
  weight: number;
  score: RubricScore;
  notes?: string;
}

export interface RubricResult {
  skillIds: string[];
  total: number;
  maxTotal: number;
  passed: boolean;
  dimensions: RubricDimension[];
}

export const DEFAULT_RUBRIC_WEIGHTS: Record<RubricDimensionId, number> = {
  trigger_match: 3,
  false_trigger_avoidance: 3,
  instruction_following: 2,
  output_quality: 2,
  safety: 2,
};
