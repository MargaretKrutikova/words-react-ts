import { Dispatch } from "react"
import { AddWordEntity, WordEntity, WordsApi } from "../domains/words"
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
    dispatch(wordsActions.fetch.failure("error fetching"))
  }
}

export const updateWord = async (
  _: WordsState,
  dispatch: Dispatch<WordsAction>,
  word: WordEntity,
) => {
  const { request, success, failure } = wordsActions.updateWord
  try {
    dispatch(request(word))
    const updatedWord = await WordsApi.saveWord(word)

    dispatch(success(updatedWord))
  } catch {
    dispatch(failure({ id: word.id, error: "error updating :(" }))
  }
}

export const addWord = async (
  _: WordsState,
  dispatch: Dispatch<WordsAction>,
  word: AddWordEntity,
) => {
  const { request, success, failure } = wordsActions.addWord
  try {
    dispatch(request(word))
    const addedWord = await WordsApi.addWord(word)

    dispatch(success(addedWord))
  } catch {
    dispatch(failure("error adding :("))
  }
}
