import React from 'react'
import {useQuery} from "@apollo/client";
import {Message} from "./Message";
import {Country} from "../../lib/countries";
import {Link} from "react-router-dom";

const Autocomplete = ({query, params, dataKey}) => {

    const {data, loading, error} = useQuery(query, {variables: params})

    if (loading || error || data[dataKey]?.length < 1) {
        return <Message>{error ? error.message : 'Loading...'}</Message>;
    }

    console.log(data[dataKey])

    return (
        <ul>
            {data[dataKey].map((country: Country) => <li key={country.code}><Link to={`/country/${country.code}`}>{country.name}</Link></li>)}
        </ul>
    )

}

export const MemoAutocomplete = React.memo(Autocomplete)