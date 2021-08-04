import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Store
} from "redux"
import { create } from "redux-react-hook"
import thunk from "redux-thunk"

import { AppAction } from "../@core/state"
import {
  newWordInitState,
  newWordReducer,
  NewWordState
} from "../@core/state/newWord"
import {
  wordDraftsInitState,
  wordDraftsReducer,
  WordDraftsState
} from "../@core/state/wordDrafts"
import {
  wordListInitState,
  wordListReducer,
  WordListState
} from "../@core/state/wordList"

export type AppState = {
  wordList: WordListState
  wordDrafts: WordDraftsState
  newWord: NewWordState
}

const rootReducer = combineReducers<AppState>({
  wordList: wordListReducer,
  wordDrafts: wordDraftsReducer,
  newWord: newWordReducer
})

const initialState: AppState = {
  wordList: wordListInitState,
  wordDrafts: wordDraftsInitState,
  newWord: newWordInitState
}

export const makeStore = (): Store<AppState, AppAction> => {
  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  )
}

export const { StoreContext, useDispatch, useMappedState } = create<
  AppState,
  any, // AppAction,
  Store<AppState, AppAction>
>()
