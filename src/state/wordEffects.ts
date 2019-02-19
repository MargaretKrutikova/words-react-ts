import { Dispatch } from "react"
import { WordEntity, WordsApi } from "../domains/words"
import { wordListActions, WordsAction, WordsState } from "./wordList"

export const getPaginatedWords = async (
  _: WordsState,
  dispatch: Dispatch<WordsAction>,
) => {
  dispatch(wordListActions.fetch.request())
  try {
    const words = await WordsApi.getWords(1, 100)
    dispatch(wordListActions.fetch.success(words))
  } catch {
    dispatch(wordListActions.fetch.failure("network error"))
  }
}

export const saveWord = async (word: WordEntity) => {
  try {
    await WordsApi.saveWord(word)
  } catch {}
}
