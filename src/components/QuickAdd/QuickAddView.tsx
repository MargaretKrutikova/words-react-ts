/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import Plus from "react-feather/dist/icons/plus"

import { EditStatus } from "../../state/editWord"
import Box from "../Box"
import Button from "../Button"
import Flex from "../Flex"
import Input from "../Input"

type Props = {
  status: EditStatus
  error: string | null
  wordValue: string
  onWordValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  save: () => void,
}

const QuickAddView: React.FunctionComponent<Props> = ({
  status,
  error,
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
      />
    </Box>
    <Button icon={true} onClick={save}>
      <Plus />
    </Button>
  </Flex>
)

export default QuickAddView
