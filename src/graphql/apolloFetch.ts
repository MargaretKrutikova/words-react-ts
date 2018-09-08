import * as ApolloLink from 'apollo-link';
import { HttpLink } from 'apollo-link-http';

const uri = 'http://localhost:4000/graphql';
const link = new HttpLink({ uri });

const apolloFetch = (query: ApolloLink.GraphQLRequest): Promise<any> => {
  return ApolloLink.makePromise(ApolloLink.execute(link, query)).then(
    response => response.data
  );
};

export default apolloFetch;
