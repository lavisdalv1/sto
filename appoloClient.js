import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clbw86gen02t401t1ep1qfv2e/master',
  cache: new InMemoryCache(),
});

export default client;
