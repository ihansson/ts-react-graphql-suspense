import {Country} from "../../lib/countries";
import React from "react";
import {Link} from "react-router-dom";

export function CountryListItem({country, listKey}: { country: Country, listKey: string }) {
    return <article key={listKey}><Link to={`/country/${country.code}`}>{country.name}</Link> ({country.continent.name})</article>
}