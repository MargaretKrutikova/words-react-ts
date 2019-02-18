import { PaginatedWords, WordEntity } from "./model"

export { createWord, copyWord } from "./model"
export { default as WordsApi } from "./service"

// tslint:disable-next-line: no-empty-interface
export interface WordEntity extends WordEntity {}
// tslint:disable-next-line: no-empty-interface
export interface PaginatedWords extends PaginatedWords {}
