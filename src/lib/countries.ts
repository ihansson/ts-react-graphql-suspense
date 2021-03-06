import {ApolloClient, gql, InMemoryCache} from "@apollo/client";

import {typeDefs} from "./schema";

// Client

export const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com',
    cache: new InMemoryCache(),
    typeDefs
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

export const CONTINENT_COUNTRIES = gql`
    query Continent($code: ID!, $continent: String!){
        continent(code: $code){
            name
            code
        }
        countries(filter: {continent: {eq: $continent}}){
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
            continent {
                name,
                code
            },
            native
            phone
            capital
            currency
        }
    }
`;

export const COUNTRY_AUTOCOMPLETE = gql`
    query Autocomplete($country: String!){
        countries(filter: {code: {regex: $country}}){
            name
            code
        }
    }
`

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

export interface CountryIfo {
    code: string
    name: string
    native: string
    phone: string
    continent: Continent
    capital: string
    currency: string
}