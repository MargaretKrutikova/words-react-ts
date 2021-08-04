import { useLocation } from "react-router-dom"

type FeatureFlags = {
  useTags: boolean
}

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const useFeatureFlags = (): FeatureFlags => {
  const query = useQuery()
  const useTags = query.get("usetags")

  return { useTags: useTags === "true" }
}

export default useFeatureFlags
