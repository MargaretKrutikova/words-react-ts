import { Dispatch } from "react"
import { AddWordEntity, WordEntity, WordsApi } from "../domains/words"
import { newWordActions } from "./newWord"
import { AppAction } from "./types"
import { wordDraftsActions } from "./wordDrafts"
import { wordListActions } from "./wordList"

export const getPaginatedWords = async (dispatch: Dispatch<AppAction>) => {
  dispatch(wordListActions.fetch.request())
  try {
    const words = await WordsApi.getWords(1, 100)
    dispatch(wordListActions.fetch.success(words))
  } catch {
    dispatch(wordListActions.fetch.failure("error fetching"))
  }
}

export const updateWord = async (
  dispatch: Dispatch<AppAction>,
  word: WordEntity,
) => {
  const { request, success, failure } = wordDraftsActions.updateWord
  try {
    dispatch(request(word))
    const updatedWord = await WordsApi.saveWord(word)

    dispatch(success(updatedWord))
  } catch {
    dispatch(failure({ id: word.id, error: "error updating :(" }))
  }
}

export const deleteWord = async (dispatch: Dispatch<AppAction>, id: string) => {
  const { request, success, failure } = wordDraftsActions.deleteWord

  try {
    dispatch(request({ id }))

    const isDeleted = await WordsApi.deleteWord(id)
    if (isDeleted) {
      dispatch(success({ id }))
    } else {
      dispatch(failure({ id, error: "no words deleted" }))
    }
  } catch {
    dispatch(failure({ id, error: "error deleting :(" }))
  }
}

export const addWord = async (
  dispatch: Dispatch<AppAction>,
  word: AddWordEntity,
) => {
  const { request, success, failure } = newWordActions.addWord
  try {
    dispatch(request(word))
    const addedWord = await WordsApi.addWord(word)

    dispatch(success(addedWord))
  } catch {
    dispatch(failure("error adding :("))
  }
}
