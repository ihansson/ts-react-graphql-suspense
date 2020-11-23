import {ApolloClient, gql, InMemoryCache} from "@apollo/client";

// Client

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

// Mock

export const mocks = [
    {
        request: {
            query: LIST_COUNTRIES,
            variables: {},
        },
        result: {
            data: {
                countries: [
                    {name: "Andorra", code: "AN"},
                    {name: "Mock Test Country", code: "MK"},
                ],
            },
        },
    },
];