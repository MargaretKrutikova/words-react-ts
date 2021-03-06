import { ActionType, createAsyncAction, getType } from "typesafe-actions"
import { PaginatedWords } from "../../api"
import { newWordActions } from "../newWord"
import { wordDraftsActions } from "../wordDrafts"

type FetchSuccessPayload = {
  words: PaginatedWords
  page: number,
}

const fetch = createAsyncAction(
  "@@wordList/FETCH",
  "@@wordList/FETCH_SUCCESS",
  "@@wordList/FETCH_ERROR",
)<void, FetchSuccessPayload, string>()

const actions = {
  fetch,
  deleteWordSuccess: wordDraftsActions.deleteWord.success,
  updateWordSuccess: wordDraftsActions.updateWord.success,
  addWordSuccess: newWordActions.addWord.success,
}

export type WordListAction = ActionType<typeof actions>

export type WordListState = {
  itemsPerPage: number
  page: number
  isLoading: boolean
  error: string | null,
} & PaginatedWords

const initialState: WordListState = {
  itemsPerPage: 10,
  page: 1,
  items: [],
  total: 0,
  error: null,
  isLoading: false,
}

const reducer = (
  state: WordListState = initialState,
  action: WordListAction,
): WordListState => {
  switch (action.type) {
    case getType(actions.fetch.request):
      return { ...state, isLoading: true, error: null }

    case getType(actions.fetch.success): {
      const {
        words: { items, total },
        page,
      } = action.payload
      return {
        ...state,
        page,
        items: state.items.concat(items),
        total,
        isLoading: false,
      }
    }

    case getType(actions.fetch.failure):
      return { ...state, isLoading: false, error: action.payload }

    case getType(actions.addWordSuccess):
      return {
        ...state,
        items: [action.payload, ...state.items],
        total: state.total + 1,
      }

    case getType(actions.updateWordSuccess): {
      const updatedWord = action.payload
      const items = state.items.map((item) =>
        item.id === updatedWord.id ? updatedWord : item,
      )

      return { ...state, items }
    }

    case getType(actions.deleteWordSuccess): {
      const items = state.items.filter((item) => item.id !== action.payload.id)
      const total = state.total - (state.items.length - items.length)

      return { ...state, items, total }
    }

    default:
      return state
  }
}

export { actions, initialState }
export default reducer
