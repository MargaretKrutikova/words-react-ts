/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { useCallback, useEffect } from "react"

import { addWord } from "../../@core/effects/wordEffects"
import { newWordActions, NewWordStatus } from "../../@core/state/newWord"
import { AppState, useDispatch, useMappedState } from "../../redux"

import useInputChange from "../../hooks/useInputChange"
import QuickAddView from "./QuickAddView"

type StateProps = {
  status: NewWordStatus,
}

const mapState = (state: AppState): StateProps => ({
  status: state.newWord.status,
})

const QuickAdd: React.FunctionComponent<{}> = () => {
  const [wordValue, handleWordValueChange, setWordValue] = useInputChange("")

  const { status } = useMappedState(useCallback((state) => mapState(state), []))
  const dispatch = useDispatch()
  const save = () =>
    addWord(dispatch, {
      value: wordValue,
      explanations: [],
      usages: [],
      translations: [],
    })

  useEffect(() => {
    if (status === "ADDED") {
      setWordValue("")
      dispatch(newWordActions.resetStatus())
    }
  }, [status])

  return (
    <QuickAddView
      wordValue={wordValue}
      onWordValueChange={handleWordValueChange}
      status={status}
      save={save}
    />
  )
}

export default QuickAdd
