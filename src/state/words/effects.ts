import { Dispatch } from "react";
import { WordsApi } from "../../domains/words";
import { actions, WordsAction, WordsState } from "./reducer";

export const getPaginatedWords = async (
  _: WordsState,
  dispatch: Dispatch<WordsAction>,
) => {
  dispatch(actions.fetchWords.request());
  try {
    const words = await WordsApi.getWords(1, 20);
    dispatch(actions.fetchWords.success(words));
  } catch {
    dispatch(actions.fetchWords.failure("network error"));
  }
};
