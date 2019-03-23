/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"

import { WordProperties } from "../../@core/api/model"
import { getPropertyFirstValue, WordProperty } from "../../@core/state/editWord"

import Input from "../../common/Input"
import Label from "../../common/Label"

type InputProps = {
  property: WordProperty
  word: WordProperties
  disabled: boolean
  onChange: (value: string, property: WordProperty) => void,
}
const PropertyInput: React.FunctionComponent<InputProps> = ({
  property,
  word,
  onChange,
  disabled: isLoading,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value, property)
  }
  return (
    <Label>
      <Input
        disabled={isLoading}
        value={getPropertyFirstValue(property, word)}
        placeholder={property}
        onChange={handleChange}
      />
    </Label>
  )
}

export default PropertyInput
