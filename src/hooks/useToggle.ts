import { useCallback, useState } from "react"

const useToggle = (initial: boolean): [boolean, () => void] => {
  const [open, setOpen] = useState(initial)
  const toggle = useCallback(() => setOpen((status) => !status), [setOpen])

  return [open, toggle]
}

export default useToggle
