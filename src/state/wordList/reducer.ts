import { Reducer } from "react"
import { ActionType, createAsyncAction, getType } from "typesafe-actions"
import { PaginatedWords } from "../../domains/words/model"
import { editWordActions } from "../editWord"

const fetch = createAsyncAction(
  "@@wordList/FETCH",
  "@@wordList/FETCH_SUCCESS",
  "@@wordList/FETCH_ERROR",
)<void, PaginatedWords, string>()

const actions = { fetch, saveWordSuccess: editWordActions.saveWord.success }

export type WordListAction = ActionType<typeof actions>

export type WordListState = {
  isLoading: boolean
  error: string | null,
} & PaginatedWords

const initialState: WordListState = {
  items: [],
  total: 0,
  error: null,
  isLoading: false,
}

const reducer: Reducer<WordListState, WordListAction> = (
  state = initialState,
  action,
): WordListState => {
  switch (action.type) {
    case getType(actions.fetch.request):
      return { ...state, isLoading: true, error: null }

    case getType(actions.fetch.success): {
      const { items, total } = action.payload
      return { ...state, items, total, isLoading: false }
    }

    case getType(actions.fetch.failure):
      return { ...state, isLoading: false, error: action.payload }

    case getType(actions.saveWordSuccess):
      return {
        ...state,
        items: [action.payload, ...state.items],
        total: state.total + 1,
      }

    default:
      return state
  }
}

export { actions, initialState }
export default reducer
