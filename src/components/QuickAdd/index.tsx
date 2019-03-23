/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { useCallback, useEffect } from "react"

import { addWord } from "../../@core/effects/wordEffects"
import { newWordActions, NewWordStatus } from "../../@core/state/newWord"
import { AppState, useDispatch, useMappedState } from "../../redux"

import { WordProperties } from "../../@core/api/model"
import useInputChange from "../../hooks/useInputChange"
import useToggle from "../../hooks/useToggle"

import QuickAddView from "./QuickAddView"

type StateProps = {
  status: NewWordStatus,
}

const mapState = (state: AppState): StateProps => ({
  status: state.newWord.status,
})

const QuickAdd: React.FunctionComponent<{}> = () => {
  const [isEditModalOpen, toggleEditModalOpen] = useToggle(false)
  const [wordValue, handleWordValueChange, setWordValue] = useInputChange("")

  const { status } = useMappedState(useCallback((state) => mapState(state), []))
  const dispatch = useDispatch()
  const save = React.useCallback(
    (word: WordProperties) => addWord(dispatch, word),
    [],
  )

  useEffect(() => {
    if (status === "ADDED") {
      setWordValue("")
      toggleEditModalOpen()
      dispatch(newWordActions.resetStatus())
    }
  }, [status, toggleEditModalOpen])

  return (
    <QuickAddView
      wordValue={wordValue}
      onWordValueChange={handleWordValueChange}
      isLoading={status === "ADDING"}
      onSave={save}
      isEditModalOpen={isEditModalOpen}
      onToggleEditModalOpen={toggleEditModalOpen}
    />
  )
}

export default QuickAdd
