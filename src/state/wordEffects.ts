import { Dispatch } from "react"
import { AddWordEntity, WordEntity, WordsApi } from "../domains/words"
import { editWordActions } from "./editWord"
import { AppAction } from "./types"
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
  const { request, success, failure } = editWordActions.updateWord
  try {
    dispatch(request(word))
    const updatedWord = await WordsApi.saveWord(word)

    dispatch(success(updatedWord))
  } catch {
    dispatch(failure({ id: word.id, error: "error updating :(" }))
  }
}

export const addWord = async (
  dispatch: Dispatch<AppAction>,
  word: AddWordEntity,
) => {
  const { request, success, failure } = editWordActions.addWord
  try {
    dispatch(request(word))
    const addedWord = await WordsApi.addWord(word)

    dispatch(success(addedWord))
  } catch {
    dispatch(failure("error adding :("))
  }
}
