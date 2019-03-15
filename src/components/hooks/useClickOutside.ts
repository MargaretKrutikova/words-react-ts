import { useEffect, useRef } from "react"

const isElementOutside = (source: Element | null, target?: Element) =>
  !!source && !!target && !source.contains(target)

const useClickOutside = <TRef extends Element = HTMLDivElement>(
  onClickOutside: (e: MouseEvent) => void,
) => {
  const containerRef = useRef<TRef>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Element
      if (isElementOutside(containerRef.current, target)) {
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
