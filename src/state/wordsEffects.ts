import { Dispatch } from "react"
import { WordEntity, WordsApi } from "../domains/words"
import { WordsAction, wordsActions, WordsState } from "./words"

export const getPaginatedWords = async (
  _: WordsState,
  dispatch: Dispatch<WordsAction>,
) => {
  dispatch(wordsActions.fetch.request())
  try {
    const words = await WordsApi.getWords(1, 100)
    dispatch(wordsActions.fetch.success(words))
  } catch {
    dispatch(wordsActions.fetch.failure("network error"))
  }
}

export const saveWord = async (
  _: WordsState,
  dispatch: Dispatch<WordsAction>,
  word: WordEntity,
) => {
  try {
    dispatch(wordsActions.saveWord.request(word))

    const savedWord = await WordsApi.saveWord(word)

    dispatch(wordsActions.saveWord.success(savedWord))
  } catch {
    dispatch(wordsActions.saveWord.failure("error saving"))
  }
}
