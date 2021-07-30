/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"

import { WordProperties } from "../../@core/api/model"
import editWordReducer, {
  editWordActions,
  editWordInitialState,
  WordProperty
} from "../../@core/state/editWord"

import Box from "../../common/Box"
import Button from "../../common/Button"
import Flex from "../../common/Flex"
import Input from "../../common/Input"
import Label from "../../common/Label"
import { LazyLoader } from "../../common/Loader"
import Modal from "../../common/Modal"
import PropertyInput from "./PropertyInput"
import TagsInput from "./TagsInput"

type Props = {
  onCancelEdit: () => void
  isLoading: boolean
  onSave: (word: WordProperties) => void
  word?: WordProperties
}

const EditModal: React.FunctionComponent<Props> = ({
  onCancelEdit,
  isLoading,
  onSave,
  word
}) => {
  const [editWord, editWordDispatch] = React.useReducer(editWordReducer, {
    ...editWordInitialState,
    ...word
  })

  const handleValueChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      editWordDispatch(editWordActions.setValue(e.target.value))
    },
    []
  )
  const handlePropertyValueChange = React.useCallback(
    (value: string, property: WordProperty) => {
      editWordDispatch(editWordActions.setPropertyValue(value, property))
    },
    []
  )

  const handleTagsChange = React.useCallback((tags: string[]) => {
    editWordDispatch(editWordActions.setTags(tags))
  }, [])

  const handleSave = () => onSave(editWord)
  return (
    <Modal onClose={onCancelEdit} title={!!word ? "Edit word" : "Add word"}>
      <Label>
        <Input
          onChange={handleValueChange}
          value={editWord.value}
          disabled={isLoading}
          placeholder="word"
        />
      </Label>
      <PropertyInput
        property={WordProperty.Translation}
        word={editWord}
        disabled={isLoading}
        onChange={handlePropertyValueChange}
      />
      <PropertyInput
        property={WordProperty.Explanation}
        word={editWord}
        disabled={isLoading}
        onChange={handlePropertyValueChange}
      />
      <PropertyInput
        property={WordProperty.Usage}
        word={editWord}
        disabled={isLoading}
        onChange={handlePropertyValueChange}
      />
      <TagsInput
        word={editWord}
        disabled={isLoading}
        onChange={handleTagsChange}
      />
      <Flex justifyContent="space-between" alignItems="center" pt="xxsmall">
        {isLoading && <LazyLoader />}
        <Box ml="auto">
          <Button
            onClick={handleSave}
            mr="xsmall"
            disabled={isLoading || !editWord.value}
          >
            Save
          </Button>
          <Button variant="secondary" onClick={onCancelEdit}>
            Cancel
          </Button>
        </Box>
      </Flex>
    </Modal>
  )
}

export default EditModal
