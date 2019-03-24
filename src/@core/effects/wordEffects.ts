import { Dispatch } from "react"
import { AppState } from "../../redux"
import { AddWordEntity, WordEntity, WordsApi } from "../api"
import { AppAction } from "../state"
import { newWordActions } from "../state/newWord"
import { wordDraftsActions } from "../state/wordDrafts"
import { wordListActions } from "../state/wordList"

export const getPaginatedWords = (page: number) => async (
  dispatch: Dispatch<AppAction>,
  getState: () => AppState,
) => {
  const {
    wordList: { itemsPerPage },
  } = getState()
  dispatch(wordListActions.fetch.request())

  try {
    const words = await WordsApi.getWords(page, itemsPerPage)
    dispatch(wordListActions.fetch.success({ words, page }))
  } catch {
    dispatch(wordListActions.fetch.failure("error fetching"))
  }
}

export const updateWord = (word: WordEntity) => async (
  dispatch: Dispatch<AppAction>,
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

export const deleteWord = (id: string) => async (
  dispatch: Dispatch<AppAction>,
) => {
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
