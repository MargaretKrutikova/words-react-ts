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
  const { request, success, failure } = wordsActions.saveWord
  const originalId = word.id
  try {
    dispatch(request({ id: originalId, word }))

    const savedWord = await WordsApi.saveWord(word)

    dispatch(success({ id: originalId, word: savedWord }))
  } catch {
    dispatch(failure({ id: originalId, error: "error saving" }))
  }
}
