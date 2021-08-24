/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { useCallback, useEffect } from "react"

import { WordEntity } from "../../@core/api"
import { getPaginatedWords } from "../../@core/effects/wordEffects"
import { AppState, useDispatch, useMappedState } from "../../redux"

import Button from "../../common/Button"
import InnerContainer from "../../common/InnerContainer"
import QuickAdd from "../QuickAdd"
import WordItem from "../WordItem"
import useFeatureFlags from "../../hooks/useFeatureFlags"
import useTagsFromUrl from "../../hooks/useUrlTags"

type StateProps = {
  words: WordEntity[]
  total: number
  itemsPerPage: number
  page: number
}

const mapState = ({ wordList }: AppState): StateProps => ({
  itemsPerPage: wordList.itemsPerPage,
  page: wordList.page,
  words: wordList.items,
  total: wordList.total
})

const WordsList: React.FunctionComponent<{}> = () => {
  const { total, words, page } = useMappedState(
    useCallback(state => mapState(state), [])
  )

  const { useTags } = useFeatureFlags()
  const { tagsFromUrl } = useTagsFromUrl()

  const tags = useTags ? tagsFromUrl : null

  const dispatch = useDispatch()
  const fetchMore = () => {
    dispatch(getPaginatedWords(page + 1, tags))
  }
  useEffect(() => {
    dispatch(getPaginatedWords(page, tags))
  }, [])

  const hasMore = words.length < total
  return (
    <InnerContainer
      flexDirection="column"
      pt={{ xs: "small", md: "smedium" }}
      mb={{ md: "smedium" }}
    >
      <QuickAdd />

      {words.map(word => (
        <WordItem key={word.id} word={word} />
      ))}

      {hasMore && (
        <Button alignSelf="center" my="small" onClick={fetchMore}>
          Load more
        </Button>
      )}
    </InnerContainer>
  )
}

export default WordsList
