/** @jsx jsx */
import { jsx } from "@emotion/core"
import { WordEntity } from "../../@core/api"
import styled from "../../theme"

import { WordProperties } from "../../@core/api/model"
import Flex from "../../common/Flex"
import EditModal from "../EditModal"
import Actions from "./Actions"
import ReadonlyWord from "./ReadonlyWord"

type Props = {
  word: WordEntity
  isLoading: boolean
  isEditing: boolean
  onToggleEditDialog: () => void
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

const WordItem = ({
  word,
  isLoading,
  onToggleEditDialog,
  isEditing,
  onRemove,
  onSave,
}: Props) => {
  const handleSave = (wordProperties: WordProperties) =>
    onSave({ ...word, ...wordProperties })

  return (
    <StyledItemBox py="xsmall" alignItems="center">
      <ReadonlyWord word={word}>
        <Actions
          isLoading={isLoading}
          onStartEdit={onToggleEditDialog}
          onRemove={onRemove}
        />
      </ReadonlyWord>

      {isEditing && (
        <EditModal
          onCancelEdit={onToggleEditDialog}
          isLoading={isLoading}
          onSave={handleSave}
          word={word}
        />
      )}
    </StyledItemBox>
  )
}

export default WordItem
