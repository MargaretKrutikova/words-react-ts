/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { WordEntity } from "../../@core/api"
import Box from "../../common/Box"
import Flex from "../../common/Flex"
import Typography from "../../common/Typography"

type Props = {
  word: WordEntity,
}

const getWordShortText = (word: WordEntity) => {
  const shortText = [word.translations[0], word.explanations[0], word.usages[0]]
    .filter((value: string) => value)
    .join(", ")

  return shortText
}

const ReadonlyWord: React.FunctionComponent<Props> = ({ word, children }) => {
  const shortText = getWordShortText(word)
  const hasShortText = !!shortText

  return (
    <Box flex={1} py={hasShortText ? 4 : "xxsmall"}>
      <Flex>
        <Typography
          flex={1}
          as={Box}
          variant="h3"
          fontSize={{ xs: 28 }}
          lineHeight={1.3}
        >
          {word.value}
        </Typography>
        {children}
      </Flex>
      {hasShortText && (
        <Typography my="xxsmall" lineHeight={1.3}>
          {shortText}
        </Typography>
      )}
    </Box>
  )
}

export default ReadonlyWord
