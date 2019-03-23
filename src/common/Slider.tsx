/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import {
  ArrowLeft as ArrowLefttIcon,
  ArrowRight as ArrowRightIcon,
} from "react-feather"

import Flex from "./Flex"
import IconButton from "./IconButton"

type Props<T> = {
  items: T[]
  renderItem: (item: T, index: number) => React.ReactNode
  onSlideChange?: (item: T) => void
  className?: string,
}

const Slider = <T extends {}>({
  items,
  onSlideChange,
  renderItem,
  className,
}: Props<T>) => {
  const currentSlideReducer = (state: number, action: "next" | "prev") => {
    if (action === "next") {
      const nextSlide = state + 1
      return nextSlide === items.length ? 0 : nextSlide
    }
    const prevSlide = state - 1
    return prevSlide === -1 ? items.length - 1 : prevSlide
  }
  const [currentSlide, dispatch] = React.useReducer(currentSlideReducer, 0)

  React.useEffect(() => {
    onSlideChange && onSlideChange(items[currentSlide])
  }, [currentSlide])

  const goToNextSlide = () => dispatch("next")
  const goToPrevSlide = () => dispatch("prev")

  return (
    <Flex className={className} py="xsmall">
      <IconButton mr="xsmall" icon={ArrowLefttIcon} onClick={goToPrevSlide} />
      {renderItem(items[currentSlide], currentSlide)}
      <IconButton ml="xsmall" icon={ArrowRightIcon} onClick={goToNextSlide} />
    </Flex>
  )
}

export default Slider
