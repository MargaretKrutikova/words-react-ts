import * as React from "react"
import { useCallback } from "react"

import { WordEntity } from "../../domains/words"
import { AppState, useDispatch, useMappedState } from "../../state"
import {
  EditStatus,
  editWordActions,
  getWordEditState,
} from "../../state/editWord"

import WordItem from "./WordItem"

type Props = {
  word: WordEntity,
}

type StateProps = {
  editStatus?: EditStatus
  error?: string | null,
}

const mapState = (state: AppState, wordId: string): StateProps => {
  const wordEditState = getWordEditState(state.wordsUnderEdit, wordId)
  return {
    editStatus: wordEditState ? wordEditState.status : undefined,
    error: wordEditState ? wordEditState.error : undefined,
  }
}

const WordListItem = React.memo(({ word }: Props) => {
  const { id } = word

  const { editStatus, error } = useMappedState(
    useCallback((state: AppState) => mapState(state, id), [id]),
  )

  const dispatch = useDispatch()
  const startEdit = useCallback(
    () => dispatch(editWordActions.startEditing(id)),
    [id],
  )

  const cancelEdit = useCallback(
    () => dispatch(editWordActions.doneEditing(id)),
    [id],
  )

  return (
    <WordItem
      word={word}
      editStatus={editStatus}
      editingError={error}
      onStartEdit={startEdit}
      onCancelEdit={cancelEdit}
    />
  )
})

export default WordListItem
