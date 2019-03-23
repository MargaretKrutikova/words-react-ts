/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { WordEntity } from "../../@core/api"
import { DraftWordStatus, isEditMode } from "../../@core/state/wordDrafts"
import styled from "../../theme"

import { WordProperties } from "../../@core/api/model"
import Flex from "../../common/Flex"
import { LazyLoader } from "../../common/Loader"
import EditModal from "../EditModal"
import Actions from "./Actions"
import ReadonlyWord from "./ReadonlyWord"

type Props = {
  word: WordEntity
  status: DraftWordStatus
  onStartEdit: () => void
  onCancelEdit: () => void
  onRemove: () => void
  onSave: (word: WordEntity) => void,
}

const StyledItemBox = styled(Flex)((props) => ({
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
  onSave,
}: Props) => {
  const isLoading = status === "DELETING" || status === "SAVING"
  const isEditing = isEditMode(status)

  const handleSave = (wordProperties: WordProperties) =>
    onSave({ ...word, ...wordProperties })

  return (
    <StyledItemBox py="xsmall" alignItems="center">
      <ReadonlyWord word={word} />

      {isEditing && (
        <EditModal
          onCancelEdit={onCancelEdit}
          isLoading={isLoading}
          onSave={handleSave}
          word={word}
        />
      )}

      <Actions
        isLoading={isLoading}
        onStartEdit={onStartEdit}
        onCancelEdit={onCancelEdit}
        onRemove={onRemove}
      />

      {isLoading && <StyledLoader />}
    </StyledItemBox>
  )
}

export default WordItem
