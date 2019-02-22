/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { useCallback, useEffect, useState } from "react"
import Plus from "react-feather/dist/icons/plus"

import { WordEntity } from "../../domains/words"
import { EditStatus } from "../../state/editWord"

import Box from "../Box"
import Button from "../Button"
import Flex from "../Flex"
import Input from "../Input"

type Props = {
  status: EditStatus
  error: string | null
  addWord: (word: WordEntity) => void
  resetStatus: () => void,
}

const QuickAdd: React.FunctionComponent<Props> = ({
  status,
  error,
  resetStatus,
  addWord,
}) => {
  const [word, setWord] = useState("")
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setWord(e.target.value)
    },
    [setWord],
  )

  const handleAddClick = () =>
    addWord({ value: word, explanations: [], usages: [], translations: [] })

  useEffect(() => {
    if (status === "SAVED") {
      setWord("")
      resetStatus()
    }
  }, [status])

  return (
    <Flex mb={{ xs: "small", md: "smedium" }}>
      <Box
        mr="smedium"
        flex="1 1 auto"
        css={{
          maxWidth: 300,
        }}
      >
        <Input
          onChange={handleInputChange}
          value={word}
          placeholder="ord"
          autoCorrect="off"
          autoComplete="off"
          type="text"
        />
      </Box>
      <Button icon={true} onClick={handleAddClick}>
        <Plus />
      </Button>
    </Flex>
  )
}

export default QuickAdd
