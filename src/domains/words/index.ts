import { PaginatedWords, WordEntity } from "./model"

export { createWord, copyWord } from "./model"
export { default as WordsApi } from "./service"

export interface WordEntity extends WordEntity {}
export interface PaginatedWords extends PaginatedWords {}
