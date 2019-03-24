/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { useCallback, useEffect } from "react"

import { addWord } from "../../@core/effects/wordEffects"
import { newWordActions, newWordSelectors } from "../../@core/state/newWord"
import { AppState, useDispatch, useMappedState } from "../../redux"

import { WordProperties } from "../../@core/api/model"
import useInputChange from "../../hooks/useInputChange"
import useToggle from "../../hooks/useToggle"

import QuickAddView from "./QuickAddView"

type StateProps = {
  isLoading: boolean
  isSuccess: boolean,
}

const mapState = (state: AppState): StateProps => ({
  isLoading: newWordSelectors.getIsLoading(state),
  isSuccess: newWordSelectors.getIsAddSuccess(state),
})

const QuickAdd: React.FunctionComponent<{}> = () => {
  const [isEditModalOpen, toggleEditModalOpen, setEditModalOpen] = useToggle(
    false,
  )
  const [wordValue, handleWordValueChange, setWordValue] = useInputChange("")

  const { isLoading, isSuccess } = useMappedState(
    useCallback((state) => mapState(state), []),
  )
  const dispatch = useDispatch()
  const save = React.useCallback(
    (word: WordProperties) => dispatch(addWord(word)),
    [],
  )

  useEffect(() => {
    if (isSuccess) {
      setWordValue("")
      setEditModalOpen(false)
      dispatch(newWordActions.done())
    }
  }, [isSuccess, toggleEditModalOpen])

  return (
    <QuickAddView
      wordValue={wordValue}
      onWordValueChange={handleWordValueChange}
      isLoading={isLoading}
      onSave={save}
      isEditModalOpen={isEditModalOpen}
      onToggleEditModalOpen={toggleEditModalOpen}
    />
  )
}

export default QuickAdd
