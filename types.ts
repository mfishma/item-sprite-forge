
export interface SpriteIteration {
  id: string;
  imageUrl: string;
  prompt: string;
  name: string; // Smart filename/title
  version: number; // Sequential version number (V.1, V.2)
  parentVersion: number | null; // ID of the version this was branched from
  actionType?: string; // Friendly name for Instant Actions (e.g. "Simplify")
  timestamp: number;
  params: SpriteParams;
}

export interface SpriteParams {
  material: string | 'adaptive';
  itemType: string | 'adaptive';
  complexity: 'simple' | 'detailed' | 'abstract' | 'adaptive';
  orientation: 'diagonal' | 'vertical' | 'horizontal' | 'frontal' | 'adaptive';
  outlineStyle: 'default' | 'bold' | 'none' | 'adaptive';
  model: 'gemini-2.5-flash-image' | 'gemini-3.1-flash-image-preview';
  referenceImage?: string;
}

export type EvolutionMode = 'remix' | 'refine';

export enum AppState {
  IDLE = 'idle',
  GENERATING = 'generating',
  EDITING = 'editing',
  ERROR = 'error'
}
