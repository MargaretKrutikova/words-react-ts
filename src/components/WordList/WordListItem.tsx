/** @jsx jsx */
import { jsx } from "@emotion/core"
import { WordEntity } from "../../domains/words"
import styled, { Theme } from "../../theme"
import media from "../../theme/media"
import Box from "../Box"
import Typography from "../Typography"

import CheckIcon from "react-feather/dist/icons/check"
import EditIcon from "react-feather/dist/icons/edit-2"
import RemoveIcon from "react-feather/dist/icons/trash-2"
import CancelIcon from "react-feather/dist/icons/x"
import Button from "../Button"
import Flex from "../Flex"
import ActionButton from "../WordItem/ActionButton"

type Props = {
  word: WordEntity,
}

const getWordShortText = (word: WordEntity) => {
  const shortText = [word.translations[0], word.explanations[0], word.usages[0]]
    .filter((value: string) => value)
    .join(", ")

  return shortText
}

const StyledItemBox = styled(Box)((props) => ({
  [media.up("md")]: {},
  position: "relative",
  borderTop: `1px solid ${props.theme.colors.border2}`,
  ":last-of-type": {
    borderBottom: `1px solid ${props.theme.colors.border2}`,
  },
}))

const WordListItem = ({ word }: Props) => {
  const shortText = getWordShortText(word)
  const hasShortText = !!shortText

  return (
    <StyledItemBox
      py={
        hasShortText
          ? { xs: "xxsmall", md: "xsmall" }
          : { xs: "xsmall", md: "small" }
      }
    >
      <Flex
        // tslint:disable-next-line: jsx-no-lambda
        css={(theme: Theme) => ({
          position: "absolute",
          height: theme.space.small,
          right: 0,
        })}
        justifyContent="flex-end"
      >
        <ActionButton>
          <EditIcon size={20} />
        </ActionButton>
        <ActionButton>
          <RemoveIcon size={20} />
        </ActionButton>
      </Flex>
      <Typography as="div" variant="h3">
        {word.value}
      </Typography>
      {hasShortText && <span>{shortText}</span>}
    </StyledItemBox>
  )
}

export default WordListItem
