import * as React from "react"
import { useCallback } from "react"

import { WordEntity } from "../../@core/api"
import { deleteWord, updateWord } from "../../@core/effects/wordEffects"
import {
  wordDraftsActions,
  wordDraftsSelectors,
} from "../../@core/state/wordDrafts"
import useToggle from "../../hooks/useToggle"
import { AppState, useDispatch, useMappedState } from "../../redux"

import WordItem from "./WordItem"

type Props = {
  word: WordEntity,
}

type StateProps = {
  isLoading: boolean
  isUpdateSuccess: boolean
  isDeleteSuccess: boolean,
}

const mapState = (state: AppState, wordId: string): StateProps => ({
  isLoading: wordDraftsSelectors.getWordIsProcessing(state, wordId),
  isUpdateSuccess: wordDraftsSelectors.getIsUpdateSuccess(state, wordId),
  isDeleteSuccess: wordDraftsSelectors.getIsDeleteSuccess(state, wordId),
})

const WordListItem = React.memo(({ word }: Props) => {
  const [isEditDialogOpen, toggleEditDialogOpen] = useToggle(false)
  const { id } = word
  const { isLoading, isUpdateSuccess, isDeleteSuccess } = useMappedState(
    useCallback((state: AppState) => mapState(state, id), [id]),
  )

  const dispatch = useDispatch()
  const removeWord = () => dispatch(deleteWord(word.id))
  const saveWord = (updatedWord: WordEntity) =>
    dispatch(updateWord(updatedWord))

  React.useEffect(() => {
    if (isUpdateSuccess) {
      dispatch(wordDraftsActions.done(id))
      toggleEditDialogOpen()
    }
  }, [isUpdateSuccess])

  React.useEffect(() => {
    if (isDeleteSuccess) {
      dispatch(wordDraftsActions.done(id))
    }
  }, [isDeleteSuccess])

  return (
    <WordItem
      word={word}
      isLoading={isLoading}
      onSave={saveWord}
      onRemove={removeWord}
      isEditing={isEditDialogOpen}
      onToggleEditDialog={toggleEditDialogOpen}
    />
  )
})

export default WordListItem
