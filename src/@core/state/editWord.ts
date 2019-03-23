import {
  ActionType,
  createAction,
  createStandardAction,
  getType,
} from "typesafe-actions"
import { WordProperties } from "../api/model"

const setValue = createStandardAction("SET_WORD_VALUE")<string>()

const setPropertyValue = createAction(
  "SET_WORD_PROPERTY_VALUE",
  (resolve) => (value: string, property: WordProperty) =>
    resolve({ value, property }),
)

export const editWordActions = {
  setValue,
  setPropertyValue,
}

export enum WordProperty {
  Translation = "translation",
  Usage = "usage",
  Explanation = "explanation",
}

type EditWordAction = ActionType<typeof editWordActions>

type EditWordState = WordProperties

export const editWordInitialState: EditWordState = {
  value: "",
  translations: [""],
  explanations: [""],
  usages: [""],
}

export const getPropertyFirstValue = (
  property: WordProperty,
  word: WordProperties,
) => {
  switch (property) {
    case "translation":
      return word.translations[0] || ""
    case "explanation":
      return word.explanations[0] || ""
    case "usage":
      return word.usages[0] || ""
    default:
      return ""
  }
}

const updatePropertyValue = (
  state: EditWordState,
  action: ActionType<typeof setPropertyValue>,
): EditWordState => {
  const { value, property } = action.payload
  switch (property) {
    case "translation":
      return { ...state, translations: [value] }
    case "explanation":
      return { ...state, explanations: [value] }
    case "usage":
      return { ...state, usages: [value] }
    default:
      return state
  }
}

const reducer = (
  state: EditWordState,
  action: EditWordAction,
): EditWordState => {
  switch (action.type) {
    case getType(setValue):
      return { ...state, value: action.payload }

    case getType(setPropertyValue):
      return updatePropertyValue(state, action)

    default:
      return state
  }
}

export default reducer
