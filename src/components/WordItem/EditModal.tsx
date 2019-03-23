/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { WordEntity } from "../../@core/api"
import { WordProperties } from "../../@core/api/model"
import editWordReducer, {
  editWordActions,
  editWordInitialState,
  getPropertyFirstValue,
  WordProperty,
} from "../../@core/state/editWord"
import Button from "../../common/Button"
import Input from "../../common/Input"
import Modal from "../../common/Modal"
import styled from "../../theme"

type Props = {
  onCancelEdit: () => void
  isLoading: boolean
  onSave: (word: WordProperties) => void
  word?: WordProperties,
}

type InputProps = {
  property: WordProperty
  word: WordProperties
  onChange: (value: string, property: WordProperty) => void,
}
const WordPropertyInput: React.FunctionComponent<InputProps> = ({
  property,
  word,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value, property)
  }
  return (
    <Input
      value={getPropertyFirstValue(property, word)}
      placeholder={property}
      onChange={handleChange}
    />
  )
}

const EditModal: React.FunctionComponent<Props> = ({
  onCancelEdit,
  isLoading,
  onSave,
  word,
}) => {
  const [editWord, editWordDispatch] = React.useReducer(editWordReducer, {
    ...editWordInitialState,
    ...word,
  })

  const handleValueChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      editWordDispatch(editWordActions.setValue(e.target.value))
    },
    [],
  )
  const handlePropertyValueChange = React.useCallback(
    (value: string, property: WordProperty) => {
      editWordDispatch(editWordActions.setPropertyValue(value, property))
    },
    [],
  )

  const handleSave = () => onSave(editWord)
  return (
    <Modal onClose={onCancelEdit}>
      <Input
        onChange={handleValueChange}
        value={editWord.value}
        placeholder="word"
      />
      <WordPropertyInput
        property={WordProperty.Translation}
        word={editWord}
        onChange={handlePropertyValueChange}
      />
      <WordPropertyInput
        property={WordProperty.Explanation}
        word={editWord}
        onChange={handlePropertyValueChange}
      />
      <WordPropertyInput
        property={WordProperty.Usage}
        word={editWord}
        onChange={handlePropertyValueChange}
      />
      <Button onClick={handleSave}>Save</Button>
      <Button variant="secondary" onClick={onCancelEdit}>
        Cancel
      </Button>
    </Modal>
  )
}

export default EditModal
