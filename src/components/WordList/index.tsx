/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { useCallback, useEffect, useReducer } from "react"

import { WordEntity } from "../../domains/words"
import { wordsInitState, wordsReducer } from "../../state/words"
import { getPaginatedWords, saveWord } from "../../state/wordsEffects"

import { editWordActions } from "../../state/editWord"
import Box from "../Box"
import QuickAdd from "./QuickAdd"
import WordListItem from "./WordListItem"

const WordsList: React.FunctionComponent<{}> = () => {
  const [state, dispatch] = useReducer(wordsReducer, wordsInitState)

  useEffect(() => {
    getPaginatedWords(state, dispatch)
  }, [])

  const addWord = useCallback(
    (wordEntity: WordEntity) => saveWord(state, dispatch, wordEntity),
    [state, dispatch],
  )

  const resetEditStatus = useCallback(
    () => dispatch(editWordActions.resetStatus()),
    [dispatch],
  )

  const { wordList, editWord } = state
  return (
    <Box pt={{ xs: "small", md: "large" }}>
      <QuickAdd
        status={editWord.status}
        error={editWord.error}
        addWord={addWord}
        resetStatus={resetEditStatus}
      />

      {wordList.items.map((word, ind) => (
        <WordListItem key={ind} word={word} />
      ))}
    </Box>
  )
}

export default WordsList
