// Client

import {ApolloClient, gql, InMemoryCache} from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com',
    cache: new InMemoryCache()
})

// Queries

export const LIST_COUNTRIES = gql`
    {
        countries {
            name
            code
        }
    }
`;

// Interfaces

export interface Country {
    name: string
}
