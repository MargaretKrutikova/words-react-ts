import { useLocation } from "react-router-dom"

type Tags = {
  tagsFromUrl: string[]
}

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const useTagsFromUrl = (): Tags => {
  const query = useQuery()
  const tagsString = query.get("tags")
  const splitTags = tagsString !== null ? tagsString.split(",") : []

  return { tagsFromUrl: splitTags }
}

export default useTagsFromUrl
