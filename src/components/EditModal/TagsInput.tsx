/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"

import { WordProperties } from "../../@core/api/model"

import Input from "../../common/Input"

type Props = {
  word: WordProperties
  disabled: boolean
  onChange: (tags: string[]) => void
}
const TagsInput: React.FunctionComponent<Props> = ({
  word,
  onChange,
  disabled: isLoading
}) => {
  const [currentTag, setCurrentTag] = React.useState<string>("")
  const [createdTags, setCreatedTags] = React.useState<string[]>(word.tags)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTag(e.target.value)
  }

  const addTag = () => {
    setCreatedTags(oldCreatedTags => {
      const updatedTags = [...oldCreatedTags, currentTag]
      onChange(updatedTags)
      return updatedTags
    })
    setCurrentTag("")
  }

  const removeTag = (tagToRemove: string) =>
    setCreatedTags(oldCreatedTags => {
      const updatedTags = oldCreatedTags.filter(t => t !== tagToRemove)
      onChange(updatedTags)
      return updatedTags
    })

  return (
    <>
      {createdTags.map(t => {
        return (
          <span
            key={t}
            style={{
              margin: 2,
              padding: 4,
              borderRadius: 5,
              lineHeight: "1",
              border: "1px solid green",
              fontSize: 12
            }}
          >
            {t}
            <button key={t} id={t} onClick={e => removeTag(t)}>
              x
            </button>
          </span>
        )
      })}
      <Input
        disabled={isLoading}
        value={currentTag}
        placeholder="tag"
        onChange={handleChange}
      />
      <button onClick={addTag}>+</button>
    </>
  )
}

export default TagsInput
