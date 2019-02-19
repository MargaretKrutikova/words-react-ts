import apolloFetch from "../../graphql/apolloFetch"
import { getWordQuery, getWordsQuery, saveWordMutation } from "./graphql"
import {
  ApiPaginatedWords,
  ApiWordEntity,
  mapToWord,
  PaginatedWords,
  WordEntity,
} from "./model"

type GetWordsResponse = {
  words: ApiPaginatedWords,
}

type WordResponse = {
  word: ApiWordEntity,
}

type SaveWordResponse = {
  SaveWord: ApiWordEntity,
}

class WordsApi {
  public getWords = async (
    page: number,
    itemsPerPage: number,
  ): Promise<PaginatedWords> => {
    const graphqlRequest = {
      query: getWordsQuery,
      variables: { page, itemsPerPage },
    }
    return apolloFetch(graphqlRequest).then(
      ({ words }: GetWordsResponse): PaginatedWords => ({
        items: words.items.map((word: ApiWordEntity) => mapToWord(word)),
        total: words.total,
      }),
    )
  }

  public async getWord(wordId: string): Promise<WordEntity> {
    const graphqlRequest = {
      query: getWordQuery,
      variables: { wordId },
    }

    return apolloFetch(graphqlRequest).then(({ word }: WordResponse) =>
      mapToWord(word),
    )
  }

  public async saveWord(word: WordEntity): Promise<WordEntity> {
    const { createdDate, updatedDate, ...saveWord } = word // eslint-disable-line no-unused-vars
    const graphqlRequest = {
      query: saveWordMutation,
      variables: { saveWord },
    }
    return apolloFetch(graphqlRequest).then(({ SaveWord }: SaveWordResponse) =>
      mapToWord(SaveWord),
    )
  }
}

const wordsApi = new WordsApi()
export default wordsApi
