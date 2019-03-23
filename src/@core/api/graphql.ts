import * as ApolloLink from "apollo-link"
import gql from "graphql-tag"

export const wordFragment: ApolloLink.DocumentNode = gql`
  fragment WordFragment on WordType {
    id
    value
    translations
    explanations
    usages
    createdDate
    updatedDate
  }
`

export const getWordsQuery: ApolloLink.DocumentNode = gql`
  query PaginatedWords($page: Int!, $itemsPerPage: Int!) {
    words(page: $page, itemsPerPage: $itemsPerPage) {
      total
      items {
        ...WordFragment
      }
    }
  }
  ${wordFragment}
`

export const getWordQuery: ApolloLink.DocumentNode = gql`
  query GetWord($wordId: String!) {
    word(key: $wordId) {
      ...WordFragment
    }
  }
  ${wordFragment}
`

export const saveWordMutation: ApolloLink.DocumentNode = gql`
  mutation SaveWord($saveWord: SaveWordInputType!) {
    saveWord(input: $saveWord) {
      ...WordFragment
    }
  }
  ${wordFragment}
`

export const deleteWordMutation: ApolloLink.DocumentNode = gql`
  mutation DeleteWord($deleteWordInput: DeleteWordInputType!) {
    deleteWord(input: $deleteWordInput) {
      deleted
    }
  }
`
