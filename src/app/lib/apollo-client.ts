import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://petmanager-5.onrender.com/graphql',
  cache: new InMemoryCache(),
});

export default client;
