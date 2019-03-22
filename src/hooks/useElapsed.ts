import { useEffect, useState } from "react"

const useElapsed = (delay: number, ...deps: any[]) => {
  const [elapsed, setElapsed] = useState(false)
  useEffect(() => {
    setElapsed(false)
    const handler = setTimeout(() => {
      setElapsed(true)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [...deps, setElapsed])

  return elapsed
}

export default useElapsed
