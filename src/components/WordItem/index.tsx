import * as React from "react"
import { useCallback } from "react"

import { WordEntity } from "../../domains/words"
import { AppState, useDispatch, useMappedState } from "../../state"

import {
  DraftWordStatus,
  getWordDraftStatus,
  wordDraftsActions,
} from "../../state/wordDrafts"
import { deleteWord } from "../../state/wordEffects"
import WordItem from "./WordItem"

type Props = {
  word: WordEntity,
}

type StateProps = {
  status: DraftWordStatus,
}

const mapState = (state: AppState, wordId: string): StateProps => ({
  status: getWordDraftStatus(state.wordDrafts, wordId),
})

const WordListItem = React.memo(({ word }: Props) => {
  const { id } = word

  const { status } = useMappedState(
    useCallback((state: AppState) => mapState(state, id), [id]),
  )

  const dispatch = useDispatch()
  const startEdit = useCallback(
    () => dispatch(wordDraftsActions.startEditing(id)),
    [id],
  )

  const cancelEdit = useCallback(
    () => dispatch(wordDraftsActions.cancelEditing(id)),
    [id],
  )

  const removeWord = useCallback(() => deleteWord(dispatch, word.id), [
    dispatch,
    word.id,
  ])

  return (
    <WordItem
      word={word}
      status={status}
      onStartEdit={startEdit}
      onCancelEdit={cancelEdit}
      onRemove={removeWord}
    />
  )
})

export default WordListItem
