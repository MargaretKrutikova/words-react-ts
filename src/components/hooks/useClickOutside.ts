import { useEffect, useRef } from "react"

const isElementInside = (target: Element, elements: Element[] = []) =>
  elements.some((el) => el.contains(target))

const isElementOutside = (
  source: Element | null,
  target?: Element,
  whiteList?: Element[],
) =>
  !!source &&
  !!target &&
  !source.contains(target) &&
  !isElementInside(target, whiteList)

const useClickOutside = <TRef extends Element = HTMLDivElement>(
  onClickOutside: (e: MouseEvent) => void,
  whiteList?: Element[],
) => {
  const containerRef = useRef<TRef>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Element
      if (isElementOutside(containerRef.current, target, whiteList)) {
        onClickOutside(e)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [onClickOutside, containerRef])

  return containerRef
}

export default useClickOutside
