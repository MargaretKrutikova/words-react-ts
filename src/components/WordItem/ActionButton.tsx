/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Omit } from "emotion-theming/types/helper"
import * as React from "react"
import Button from "../Button"

type Props = {} & Omit<
  React.HTMLAttributes<HTMLButtonElement>,
  "color" | "width"
>

const ActionButton: React.FunctionComponent<Props> = ({
  children,
  ...rest
}) => (
  <Button icon={true} variant="secondary" {...rest}>
    {children}
  </Button>
)
export default ActionButton
