/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { Plus } from "react-feather"

import { NewWordStatus } from "../../state/newWord"

import Box from "../Box"
import Button from "../Button"
import Flex from "../Flex"
import Input from "../Input"

type Props = {
  status: NewWordStatus
  wordValue: string
  onWordValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  save: () => void,
}

const QuickAddView: React.FunctionComponent<Props> = ({
  status,
  save,
  wordValue,
  onWordValueChange,
}) => (
  <Flex mb={{ xs: "small", md: "smedium" }}>
    <Box
      mr="smedium"
      flex="1 1 auto"
      css={{
        maxWidth: 300,
      }}
    >
      <Input
        onChange={onWordValueChange}
        value={wordValue}
        placeholder="ord"
        autoCorrect="off"
        autoComplete="off"
        type="text"
        disabled={status === "ADDING"}
      />
    </Box>
    <Button icon={true} onClick={save}>
      <Plus />
    </Button>
  </Flex>
)

export default QuickAddView
