import {ApolloClient, gql, InMemoryCache} from "@apollo/client";

// Client

export const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com',
    cache: new InMemoryCache()
})

// Queries

export const CONTINENTS_AND_COUNTRIES = gql`
    {
        continents {
            name
            code
        }
        countries {
            name
            code
            continent {
                name,
                code
            }
        }
    }
`;

export const COUNTRY = gql`
    query Country($country: ID!){
        country(code: $country){
            name
            code
        }
    }
`;

// Interfaces

export interface Continent {
    name: string
    code: string
}

export interface Country {
    name: string
    code: string
    continent: Continent
}

// Mock

export const mocks = [
    {
        request: {
            query: CONTINENTS_AND_COUNTRIES,
            variables: {},
        },
        result: {
            data: {
                continents: [
                    {name: "Africa", code: "AF"},
                    {name: "Mock Test Contintent", code: "MK"}
                ],
                countries: [
                    {name: "Andorra", code: "AN", continent: {name: "Europe", code: "EU"}},
                    {name: "Mock Test Country", code: "MK", continent: {name: "Mock Test Continent", code: "MK"}},
                ],
            },
        },
    },
];