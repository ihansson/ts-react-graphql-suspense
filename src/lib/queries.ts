// Define Apollo client
import {ApolloClient, gql, InMemoryCache} from "@apollo/client";

export interface Country {
    name: string
}

export const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com',
    cache: new InMemoryCache()
})

export const LIST_COUNTRIES = gql`
    {
        countries {
            name
            code
        }
    }
`;