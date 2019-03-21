import { ActionType, createStandardAction, getType } from "typesafe-actions"
import { WordProperties } from "../../domains/words/model"

const setValue = createStandardAction("SET_WORD_VALUE")<string>()
const setTranslation = createStandardAction("SET_WORD_TRANSLATION")<string>()
const setExplanation = createStandardAction("SET_WORD_EXPLANATION")<string>()
const setUsage = createStandardAction("SET_WORD_USAGE")<string>()
const setVisibleProperty = createStandardAction("SET_VISIBLE_PROPERTY")<
  VisibleProperty
>()

export const editWordActions = {
  setValue,
  setTranslation,
  setExplanation,
  setUsage,
  setVisibleProperty,
}

export type VisibleProperty = "translation" | "usage" | "explanation"

type EditWordAction = ActionType<typeof editWordActions>

type EditWordState = WordProperties & {
  visibleProperty: VisibleProperty,
}

export const editWordInitialState: EditWordState = {
  value: "",
  translations: [""],
  explanations: [""],
  usages: [""],
  visibleProperty: "translation",
}

const reducer = (
  state: EditWordState,
  action: EditWordAction,
): EditWordState => {
  switch (action.type) {
    case getType(setValue):
      return {
        ...state,
        value: action.payload,
      }
    case getType(setTranslation):
      return {
        ...state,
        translations: [action.payload],
      }
    case getType(setExplanation):
      return {
        ...state,
        explanations: [action.payload],
      }
    case getType(setUsage):
      return {
        ...state,
        usages: [action.payload],
      }
    case getType(setVisibleProperty):
      return {
        ...state,
        visibleProperty: action.payload,
      }
    default:
      return state
  }
}

export default reducer
