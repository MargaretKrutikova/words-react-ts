import { AddWordEntity } from "."
import apolloFetch from "./apolloFetch"
import {
  deleteWordMutation,
  getWordQuery,
  getWordsQuery,
  saveWordMutation,
} from "./graphql"
import {
  ApiPaginatedWords,
  ApiWordEntity,
  mapToWordEntity,
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
  saveWord: ApiWordEntity,
}

type DeleteWordResponse = {
  deleteWord: {
    deleted: boolean,
  },
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
        items: words.items.map((word: ApiWordEntity) => mapToWordEntity(word)),
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
      mapToWordEntity(word),
    )
  }

  public async saveWord(word: WordEntity): Promise<WordEntity> {
    const { createdDate, updatedDate, ...saveWord } = word
    const graphqlRequest = {
      query: saveWordMutation,
      variables: { saveWord },
    }
    return apolloFetch(graphqlRequest).then(
      ({ saveWord: SaveWord }: SaveWordResponse) => mapToWordEntity(SaveWord),
    )
  }

  public async addWord(word: AddWordEntity): Promise<WordEntity> {
    const graphqlRequest = {
      query: saveWordMutation,
      variables: { saveWord: word },
    }
    return apolloFetch(graphqlRequest).then(({ saveWord }: SaveWordResponse) =>
      mapToWordEntity(saveWord),
    )
  }

  public async deleteWord(id: string): Promise<boolean> {
    const graphqlRequest = {
      query: deleteWordMutation,
      variables: { deleteWordInput: { id } },
    }
    return apolloFetch(graphqlRequest).then(
      ({ deleteWord: { deleted } }: DeleteWordResponse) => deleted,
    )
  }
}

export default new WordsApi()
