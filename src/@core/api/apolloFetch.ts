import * as ApolloLink from "apollo-link"
import { HttpLink } from "apollo-link-http"

const uri = process.env.REACT_APP_API_URL
const link = new HttpLink({ uri })

const apolloFetch = (query: ApolloLink.GraphQLRequest): Promise<any> => {
  return ApolloLink.makePromise(ApolloLink.execute(link, query)).then(
    (response) => response.data,
  )
}

export default apolloFetch
