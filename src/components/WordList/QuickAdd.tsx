/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import Plus from "react-feather/dist/icons/plus"
import Box from "../Box"
import Button from "../Button"
import Flex from "../Flex"
import Input from "../Input"

type Props = {}

const QuickAdd: React.FunctionComponent<Props> = () => (
  <Flex as="form">
    <Box width={{ xs: 1, md: 350 }} mr="smedium">
      <Input autoCorrect="off" autoComplete="off" type="text" />
    </Box>
    <Button icon={true}>
      <Plus />
    </Button>

    {/* <Button>Add</Button> */}
  </Flex>
)

export default QuickAdd
