import { useState } from "react"

type UseInputChangeResult = [
  string,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  (value: string) => void
]

const useInputChange = (initValue = ""): UseInputChangeResult => {
  const [value, setValue] = useState(initValue)
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return [value, handleValueChange, setValue]
}

export default useInputChange
