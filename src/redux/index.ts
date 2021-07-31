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

type FeatureFlags = {
  useTags: boolean
}

const defaultFeatureFlags: FeatureFlags = { useTags: false }

export type AppState = {
  wordList: WordListState
  wordDrafts: WordDraftsState
  newWord: NewWordState
  featureFlags: FeatureFlags
}

const rootReducer = combineReducers<AppState>({
  wordList: wordListReducer,
  wordDrafts: wordDraftsReducer,
  newWord: newWordReducer,
  featureFlags: (f: FeatureFlags = defaultFeatureFlags) => f
})

const createInitialState = (useTags: boolean): AppState => ({
  wordList: wordListInitState,
  wordDrafts: wordDraftsInitState,
  newWord: newWordInitState,
  featureFlags: { useTags }
})

export const makeStore = (useTags: boolean): Store<AppState, AppAction> => {
  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  return createStore(
    rootReducer,
    createInitialState(useTags),
    composeEnhancers(applyMiddleware(thunk))
  )
}

export const { StoreContext, useDispatch, useMappedState } = create<
  AppState,
  any, // AppAction,
  Store<AppState, AppAction>
>()
