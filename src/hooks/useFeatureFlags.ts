import { useLocation } from "react-router-dom"

type FeatureFlags = {
  useTags: boolean
}

const useQuery = () => new URLSearchParams(useLocation().search)

const useFeatureFlags = (): FeatureFlags => {
  const query = useQuery()
  const useTags = query.get("usetags")

  return { useTags: useTags === "true" }
}

export default useFeatureFlags
