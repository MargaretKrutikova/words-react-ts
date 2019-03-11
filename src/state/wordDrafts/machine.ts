import { keys } from "../../utils"
import { WordDraftsAction } from "./actions"

export type DraftWordStatus =
  | "IDLE"
  | "EDITING"
  | "SAVING"
  | "SAVED"
  | "SAVING_ERROR"
  | "DELETING"
  | "DELETED"
  | "DELETING_ERROR"

type DraftWordStatusMachine = {
  [k in DraftWordStatus]: { [a in WordDraftsAction["type"]]?: DraftWordStatus }
}
type DraftWordStatusTransitions = { [k in DraftWordStatus]: DraftWordStatus[] }

export const draftWordStatusMachine: DraftWordStatusMachine = {
  IDLE: {
    "word/START_EDIT": "EDITING",
    "word/DELETE": "DELETING",
  },
  EDITING: {
    "word/CANCEL_EDIT": "IDLE",
    "word/UPDATE": "SAVING",
  },
  SAVING: {
    "word/UPDATE": "SAVED",
    "word/UPDATE_ERROR": "SAVING_ERROR",
  },
  SAVING_ERROR: {
    "word/UPDATE": "SAVING",
    "word/RESET_STATUS": "IDLE",
  },
  SAVED: {
    "word/RESET_STATUS": "IDLE",
  },
  DELETING: {
    "word/DELETE_SUCCESS": "DELETED",
    "word/DELETE_ERROR": "DELETING_ERROR",
  },
  DELETED: {
    "word/RESET_STATUS": "IDLE",
  },
  DELETING_ERROR: {
    "word/DELETE": "DELETING",
    "word/RESET_STATUS": "IDLE",
  },
}
