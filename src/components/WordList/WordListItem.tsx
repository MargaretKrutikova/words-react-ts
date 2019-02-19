/** @jsx jsx */
import { jsx } from "@emotion/core"
import { WordEntity } from "../../domains/words"
import styled from "../../theme"
import media from "../../theme/media"
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

const StyledItemBox = styled(Box)({
  [media.up("md")]: {},
})

const WordListItem = ({ word }: Props) => (
  <StyledItemBox>
    <Typography as="div" variant="h3">
      {word.value}
    </Typography>
    <span>{getWordShortText(word)}</span>
  </StyledItemBox>
)

export default WordListItem
