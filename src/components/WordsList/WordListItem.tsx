/** @jsx jsx */
import { jsx } from "@emotion/core"
import { WordEntity } from "../../domains/words"
import Box from "../Box"
import Typography from "../Typography"

type Props = {
  word: WordEntity,
}

const getWordShortText = (word: WordEntity) => {
  const shortText = [word.translations[0], word.explanations[0], word.usages[0]]
    .filter((value: string) => value)
    .join(", ")

  return shortText
}

const WordListItem = ({ word }: Props) => (
  <Box>
    <Typography as="h4" variant="h2">
      {word.value}
    </Typography>
    <span>{getWordShortText(word)}</span>
  </Box>
)

export default WordListItem
