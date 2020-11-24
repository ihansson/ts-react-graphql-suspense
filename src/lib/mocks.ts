import {CONTINENT_COUNTRIES, CONTINENTS_AND_COUNTRIES, COUNTRY} from "./countries";

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
    {
        request: {
            query: COUNTRY,
            variables: {country: 'MK'},
        },
        result: {
            data: {
                country: {name: "Mock Test Country", code: "MK", continent: {name: "Mock Test Continent", code: "MK"}}
            },
        },
    },
    {
        request: {
            query: CONTINENT_COUNTRIES,
            variables: {continent: 'MK'},
        },
        result: {
            data: {
                countries: [
                    {name: "Mock Test Country", code: "MK", continent: {name: "Mock Test Continent", code: "MK"}},
                ]
            },
        },
    }
];