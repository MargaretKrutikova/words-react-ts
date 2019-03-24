/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { Plus } from "react-feather"

import { WordProperties } from "../../@core/api/model"
import Box from "../../common/Box"
import Button from "../../common/Button"
import Flex from "../../common/Flex"
import Input from "../../common/Input"
import { ButtonLink } from "../../common/Link"
import EditModal from "../EditModal"

type Props = {
  isLoading: boolean
  wordValue: string
  onWordValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSave: (word: WordProperties) => void
  isEditModalOpen: boolean
  onToggleEditModalOpen: () => void,
}

const QuickAddView: React.FunctionComponent<Props> = ({
  isLoading,
  onSave,
  wordValue,
  onWordValueChange,
  isEditModalOpen,
  onToggleEditModalOpen,
}) => {
  const handleQuickSave = () =>
    onSave({
      value: wordValue,
      explanations: [],
      usages: [],
      translations: [],
    })

  return (
    <Box mb="small">
      <Flex mb="xxsmall">
        <Box
          mr="smedium"
          flex="1 1 auto"
          css={{
            maxWidth: 300,
          }}
        >
          <Input
            onChange={onWordValueChange}
            value={wordValue}
            placeholder="word"
            disabled={isLoading}
          />
        </Box>
        <Button
          icon={true}
          onClick={handleQuickSave}
          disabled={!wordValue || isLoading}
        >
          <Plus />
        </Button>
      </Flex>

      <ButtonLink onClick={onToggleEditModalOpen}>More</ButtonLink>
      {isEditModalOpen && (
        <EditModal
          onSave={onSave}
          isLoading={isLoading}
          onCancelEdit={onToggleEditModalOpen}
        />
      )}
    </Box>
  )
}

export default QuickAddView
