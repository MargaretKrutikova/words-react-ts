/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"

import { WordProperties } from "../../@core/api/model"

import Input from "../../common/Input"
import { StyledTag } from "../../common/Tag"

type Props = {
  word: WordProperties
  disabled: boolean
  onChange: (tags: string[]) => void
}

export const canAddTag = (currentTag: string, createdTags: string[]) => {
  if (currentTag.length === 0) return false

  if (createdTags.includes(currentTag)) return false

  return true
}

const TagsInput: React.FunctionComponent<Props> = ({
  word,
  onChange,
  disabled: isLoading
}) => {
  const [currentTag, setCurrentTag] = React.useState<string>("")
  const [createdTags, setCreatedTags] = React.useState<string[]>(word.tags)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCurrentTag(e.target.value)

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
          <StyledTag key={t}>
            {t}
            <button key={t} id={t} onClick={e => removeTag(t)}>
              x
            </button>
          </StyledTag>
        )
      })}
      <Input
        disabled={isLoading}
        value={currentTag}
        placeholder="tag"
        onChange={handleChange}
      />
      <button disabled={!canAddTag(currentTag, createdTags)} onClick={addTag}>
        +
      </button>
    </>
  )
}

export default TagsInput
