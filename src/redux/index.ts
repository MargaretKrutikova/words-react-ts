import { combineReducers, createStore, Store } from "redux"
import { create } from "redux-react-hook"
import { AppAction } from "../@core/state"
import {
  newWordInitState,
  newWordReducer,
  NewWordState,
} from "../@core/state/newWord"
import {
  wordDraftsInitState,
  wordDraftsReducer,
  WordDraftsState,
} from "../@core/state/wordDrafts"
import {
  wordListInitState,
  wordListReducer,
  WordListState,
} from "../@core/state/wordList"

export type AppState = {
  wordList: WordListState
  wordDrafts: WordDraftsState
  newWord: NewWordState,
}

const rootReducer = combineReducers<AppState>({
  wordList: wordListReducer,
  wordDrafts: wordDraftsReducer,
  newWord: newWordReducer,
})

const initialState: AppState = {
  wordList: wordListInitState,
  wordDrafts: wordDraftsInitState,
  newWord: newWordInitState,
}

export const makeStore = (): Store<AppState, AppAction> =>
  createStore(rootReducer, initialState)

export const { StoreContext, useDispatch, useMappedState } = create<
  AppState,
  AppAction,
  Store<AppState, AppAction>
>()
