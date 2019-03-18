/** @jsx jsx */
import { jsx } from "@emotion/core"
import { WordEntity } from "../../domains/words"
import styled from "../../theme"
import Box from "../Box"
import Typography from "../Typography"

import { DraftWordStatus, isEditMode } from "../../state/wordDrafts"

import { LazyLoader } from "../Loader"
import Actions from "./Actions"

type Props = {
  word: WordEntity
  status: DraftWordStatus
  onStartEdit: () => void
  onCancelEdit: () => void
  onRemove: () => void,
}

const getWordShortText = (word: WordEntity) => {
  const shortText = [word.translations[0], word.explanations[0], word.usages[0]]
    .filter((value: string) => value)
    .join(", ")

  return shortText
}

const StyledItemBox = styled(Box)((props) => ({
  position: "relative",
  borderTop: `1px solid ${props.theme.colors.border2}`,
  ":last-of-type": {
    borderBottom: `1px solid ${props.theme.colors.border2}`,
  },
}))

const StyledLoader = styled(LazyLoader)(({ theme }) => ({
  position: "absolute",
  bottom: theme.space.xsmall,
  right: theme.space.xxsmall,
}))

const WordItem = ({
  word,
  status,
  onStartEdit,
  onCancelEdit,
  onRemove,
}: Props) => {
  const shortText = getWordShortText(word)
  const hasShortText = !!shortText

  const isLoading = status === "DELETING" || status === "SAVING"
  const isEditing = isEditMode(status)

  return (
    <StyledItemBox py={hasShortText ? "xsmall" : "small"}>
      {isLoading && <StyledLoader />}
      <Actions
        isEditing={isEditing}
        isLoading={isLoading}
        onStartEdit={onStartEdit}
        onCancelEdit={onCancelEdit}
        onRemove={onRemove}
        canSave={false}
        onSave={() => undefined}
      />
      <Typography as="div" variant="h3" fontSize={{ xs: 26 }}>
        {word.value}
      </Typography>
      {hasShortText && <span>{shortText}</span>}
    </StyledItemBox>
  )
}

export default WordItem
