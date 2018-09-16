import { WordEntity } from '../model';

export type WordsState = {
  isLoading: boolean;
  items: WordEntity[];
  total: number;
  error?: Error | null;
};
