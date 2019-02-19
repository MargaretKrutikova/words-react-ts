import { Dispatch } from "react";
import { WordEntity, WordsApi } from "../../domains/words";
import { actions, WordsAction, WordsState } from "./reducer";

export const getPaginatedWords = async (
  _: WordsState,
  dispatch: Dispatch<WordsAction>,
) => {
  dispatch(actions.fetchWords.request());
  try {
    const words = await WordsApi.getWords(1, 100);
    dispatch(actions.fetchWords.success(words));
  } catch {
    dispatch(actions.fetchWords.failure("network error"));
  }
};

export const saveWord = async (word: WordEntity) => {
  try {
    await WordsApi.saveWord(word);
  } catch {}
};
