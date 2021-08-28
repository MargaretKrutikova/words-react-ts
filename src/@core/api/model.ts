export type WordProperties = {
  value: string
  translations: string[]
  explanations: string[]
  usages: string[]
  tags: string[]
}

export type AddWordEntity = WordProperties

export type WordEntity = {
  id: string
  createdDate?: Date
  updatedDate?: Date
} & WordProperties

export type ApiWordEntity = {
  id: string
  value: string
  translations?: string[]
  explanations?: string[]
  usages?: string[]
  tags?: string[]
  createdDate?: string // dates come as strings
  updatedDate?: string
}

export type PaginatedWords = {
  items: WordEntity[]
  total: number
}

export type ApiPaginatedWords = {
  items: ApiWordEntity[]
  total: number
}

const convertToDate = (dateString?: string) =>
  dateString ? new Date(dateString) : undefined

const copyOrEmpty = (array?: string[]): string[] => (!array ? [] : [...array])

export const mapToWordEntity = (apiWord: ApiWordEntity): WordEntity => ({
  id: apiWord.id,
  value: apiWord.value,
  translations: copyOrEmpty(apiWord.translations),
  explanations: copyOrEmpty(apiWord.explanations),
  usages: copyOrEmpty(apiWord.usages),
  tags: copyOrEmpty(apiWord.tags),
  createdDate: convertToDate(apiWord.createdDate),
  updatedDate: convertToDate(apiWord.updatedDate)
})

export const copyWord = (word: WordEntity): WordEntity => {
  const { translations, explanations, usages, ...rest } = word
  return {
    ...rest,
    translations: copyOrEmpty(translations),
    explanations: copyOrEmpty(explanations),
    usages: copyOrEmpty(usages)
  }
}
