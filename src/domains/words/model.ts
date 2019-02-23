type WordProperties = {
  value: string
  translations: string[]
  explanations: string[]
  usages: string[],
}

export type AddWordEntity = WordProperties

export type WordEntity = {
  id: string
  createdDate?: Date
  updatedDate?: Date,
} & WordProperties

export type ApiWordEntity = {
  _id: string // by default stored as _id in the mongo db
  value: string
  translations?: string[]
  explanations?: string[]
  usages?: string[]
  createdDate?: string // dates come as strings
  updatedDate?: string,
}

export type PaginatedWords = {
  items: WordEntity[]
  total: number,
}

export type ApiPaginatedWords = {
  items: ApiWordEntity[]
  total: number,
}

const convertToDate = (dateString?: string) =>
  dateString ? new Date(dateString) : undefined

const copyOrEmpty = (array?: string[]): string[] => (!array ? [] : [...array])

export const mapToWordEntity = (apiWord: ApiWordEntity): WordEntity => ({
  id: apiWord._id,
  value: apiWord.value,
  translations: copyOrEmpty(apiWord.translations),
  explanations: copyOrEmpty(apiWord.explanations),
  usages: copyOrEmpty(apiWord.usages),
  createdDate: convertToDate(apiWord.createdDate),
  updatedDate: convertToDate(apiWord.updatedDate),
})

export const copyWord = (word: WordEntity): WordEntity => {
  const { translations, explanations, usages, ...rest } = word
  return {
    ...rest,
    translations: copyOrEmpty(translations),
    explanations: copyOrEmpty(explanations),
    usages: copyOrEmpty(usages),
  }
}
