import { Reducer } from "react"
import { ActionType, createAsyncAction, getType } from "typesafe-actions"
import { PaginatedWords } from "../../domains/words/model"

const fetch = createAsyncAction(
  "@@words/FETCH_REQUEST",
  "@@words/FETCH_SUCCESS",
  "@@words/FETCH_ERROR",
)<void, PaginatedWords, string>()

export const actions = { fetch }

export type WordsState = {
  data: PaginatedWords
  isLoading: boolean
  error: string | null,
}

export const initialState: WordsState = {
  data: {
    items: [],
    total: 0,
  },
  isLoading: false,
  error: null,
}

export type WordsAction = ActionType<typeof actions>

const wordsReducer: Reducer<WordsState, WordsAction> = (state, action) => {
  switch (action.type) {
    case getType(actions.fetch.request):
      return { ...state, isLoading: true, error: null }

    case getType(actions.fetch.success):
      return { ...state, isLoading: false, data: action.payload }

    case getType(actions.fetch.failure):
      return { ...state, isLoading: false, error: action.payload }
    default:
      return state
  }
}

export default wordsReducer
