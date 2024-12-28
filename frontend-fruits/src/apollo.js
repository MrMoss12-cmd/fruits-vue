import { ApolloClient, InMemoryCache, HttpLink, HttpLink } from '@apollo/client/core';

const HttpLink = new HttpLink({
    uri:'http://localhost:3000/graphql',
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
    link: HttpLink,
    cache,
});

export default apolloClient;