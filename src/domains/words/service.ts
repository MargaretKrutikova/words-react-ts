import apolloFetch from "../../graphql/apolloFetch"
import { getWordQuery, getWordsQuery, saveWordMutation } from "./graphql"
import {
  ApiPaginatedWords,
  ApiWordEntity,
  mapToWord,
  PaginatedWords,
  WordEntity,
} from "./model"

class WordsApi {
  public async getWords(
    page: number,
    itemsPerPage: number,
  ): Promise<PaginatedWords> {
    return apolloFetch({
      query: getWordsQuery,
      variables: { page, itemsPerPage },
    }).then(
      (data: { words: ApiPaginatedWords }): PaginatedWords => {
        return {
          items: data.words.items.map((word: ApiWordEntity) => mapToWord(word)),
          total: data.words.total,
        }
      },
    )
  }

  public async getWord(wordId: string): Promise<WordEntity> {
    return apolloFetch({
      query: getWordQuery,
      variables: { wordId },
    }).then((data: { word: ApiWordEntity }) => {
      return mapToWord(data.word)
    })
  }

  public async saveWord(word: WordEntity): Promise<WordEntity> {
    const { createdDate, updatedDate, ...saveWord } = word // eslint-disable-line no-unused-vars
    return apolloFetch({
      query: saveWordMutation,
      variables: { saveWord },
    }).then((data: { word: ApiWordEntity }) => mapToWord(data.word))
  }
}

const wordsApi = new WordsApi()
export default wordsApi
