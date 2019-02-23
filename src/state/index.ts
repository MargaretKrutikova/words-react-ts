import { combineReducers, createStore, Store } from "redux"
import { create } from "redux-react-hook"
import { editWordInitState, editWordReducer } from "./editWord"
import { AppAction, AppState } from "./types"
import { wordListInitState, wordListReducer } from "./wordList"

export type AppAction = AppAction
export type AppState = AppState

const rootReducer = combineReducers<AppState>({
  wordList: wordListReducer,
  wordsUnderEdit: editWordReducer,
})
const initialState: AppState = {
  wordList: wordListInitState,
  wordsUnderEdit: editWordInitState,
}

export const makeStore = (): Store<AppState, AppAction> =>
  createStore(rootReducer, initialState)

export const { StoreContext, useDispatch, useMappedState } = create<
  AppState,
  AppAction,
  Store<AppState, AppAction>
>()
