import * as React from "react"
import { useCallback } from "react"

import { WordEntity } from "../../@core/api"
import { deleteWord, updateWord } from "../../@core/effects/wordEffects"
import {
  wordDraftsActions,
  wordDraftsSelectors,
} from "../../@core/state/wordDrafts"
import { AppState, useDispatch, useMappedState } from "../../redux"

import WordItem from "./WordItem"

type Props = {
  word: WordEntity,
}

type StateProps = {
  isLoading: boolean
  isEditDialogOpen: boolean,
}

const mapState = (state: AppState, wordId: string): StateProps => ({
  isLoading: wordDraftsSelectors.getWordIsProcessing(state, wordId),
  isEditDialogOpen: wordDraftsSelectors.getIsEditDialogOpen(state, wordId),
})

const WordListItem = React.memo(({ word }: Props) => {
  const { id } = word
  const { isLoading, isEditDialogOpen } = useMappedState(
    useCallback((state: AppState) => mapState(state, id), [id]),
  )

  const dispatch = useDispatch()
  const removeWord = () => dispatch(deleteWord(word.id))
  const toggleEditDialogOpen = () =>
    dispatch(wordDraftsActions.toggleEditDialogOpen(word.id))
  const saveWord = (updatedWord: WordEntity) =>
    dispatch(updateWord(updatedWord))

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
