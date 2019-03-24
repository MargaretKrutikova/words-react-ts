/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { useCallback, useEffect } from "react"

import { addWord } from "../../@core/effects/wordEffects"
import { newWordActions, newWordSelectors } from "../../@core/state/newWord"
import { AppState, useDispatch, useMappedState } from "../../redux"

import { WordProperties } from "../../@core/api/model"
import useInputChange from "../../hooks/useInputChange"

import QuickAddView from "./QuickAddView"

type StateProps = {
  isLoading: boolean
  isSuccess: boolean
  isEditDialogOpen: boolean,
}

const mapState = (state: AppState): StateProps => ({
  isLoading: newWordSelectors.getIsLoading(state),
  isSuccess: newWordSelectors.getIsAddSuccess(state),
  isEditDialogOpen: newWordSelectors.getIsEditDialogOpen(state),
})

const QuickAdd: React.FunctionComponent<{}> = () => {
  const [wordValue, handleWordValueChange, setWordValue] = useInputChange("")

  const { isLoading, isSuccess, isEditDialogOpen } = useMappedState(
    useCallback((state) => mapState(state), []),
  )
  const dispatch = useDispatch()
  const save = React.useCallback(
    (word: WordProperties) => dispatch(addWord(word)),
    [],
  )
  const toggleEditModalOpen = React.useCallback(
    () => dispatch(newWordActions.toggleEditDialogOpen()),
    [],
  )

  useEffect(() => {
    if (isSuccess) {
      setWordValue("")
    }
  }, [isSuccess])

  return (
    <QuickAddView
      wordValue={wordValue}
      onWordValueChange={handleWordValueChange}
      isLoading={isLoading}
      onSave={save}
      isEditModalOpen={isEditDialogOpen}
      onToggleEditModalOpen={toggleEditModalOpen}
    />
  )
}

export default QuickAdd
