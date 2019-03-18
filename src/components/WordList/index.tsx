/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { useCallback, useEffect } from "react"

import { WordEntity } from "../../domains/words"
import { AppState, useDispatch, useMappedState } from "../../state"
import { getPaginatedWords } from "../../state/wordEffects"

import InnerContainer from "../InnerContainer"
import QuickAdd from "../QuickAdd"
import WordItem from "../WordItem"

type StateProps = {
  words: WordEntity[]
  total: number,
}

const mapState = ({ wordList }: AppState): StateProps => ({
  words: wordList.items,
  total: wordList.total,
})

const WordsList: React.FunctionComponent<{}> = () => {
  const { total, words } = useMappedState(
    useCallback((state) => mapState(state), []),
  )

  const dispatch = useDispatch()
  useEffect(() => {
    getPaginatedWords(dispatch)
  }, [])

  return (
    <InnerContainer
      flexDirection="column"
      pt={{ xs: "small", md: "smedium" }}
      mb={{ md: "smedium" }}
    >
      <QuickAdd />

      {words.map((word) => (
        <WordItem key={word.id} word={word} />
      ))}
    </InnerContainer>
  )
}

export default WordsList
