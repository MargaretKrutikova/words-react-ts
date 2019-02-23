/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { useCallback, useEffect, useState } from "react"

import { AppState, useDispatch, useMappedState } from "../../state"
import {
  EditStatus,
  editWordActions,
  getNewWordEditState,
} from "../../state/editWord"
import { addWord } from "../../state/wordEffects"

import QuickAddView from "./QuickAddView"

type StateProps = {
  status: EditStatus
  error: string | null,
}

const mapState = (state: AppState): StateProps => {
  const newWord = getNewWordEditState(state.wordsUnderEdit)
  return {
    status: newWord.status,
    error: newWord.error,
  }
}

const QuickAdd: React.FunctionComponent<{}> = () => {
  const [wordValue, setWordValue] = useState("")
  const handleWordValueChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setWordValue(e.target.value)
    },
    [setWordValue],
  )

  const { status, error } = useMappedState(
    useCallback((state) => mapState(state), []),
  )
  const dispatch = useDispatch()
  const save = useCallback(
    () =>
      addWord(dispatch, {
        value: wordValue,
        explanations: [],
        usages: [],
        translations: [],
      }),
    [dispatch, wordValue],
  )

  useEffect(() => {
    if (status === "SAVED") {
      setWordValue("")
      dispatch(editWordActions.resetAdding())
    }
  }, [status])

  return (
    <QuickAddView
      wordValue={wordValue}
      onWordValueChange={handleWordValueChange}
      status={status}
      error={error}
      save={save}
    />
  )
}

export default QuickAdd
