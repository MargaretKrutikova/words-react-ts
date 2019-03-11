import { combineReducers, createStore, Store } from "redux"
import { create } from "redux-react-hook"
import { newWordInitState, newWordReducer } from "./newWord"
import { AppAction, AppState } from "./types"
import { wordDraftsInitState, wordDraftsReducer } from "./wordDrafts"
import { wordListInitState, wordListReducer } from "./wordList"

export type AppAction = AppAction
export type AppState = AppState

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
