import {Country} from "../../lib/countries";
import React from "react";

export function CountryListItem({country, listKey}: { country: Country, listKey: string }) {
    return <li key={listKey}>{country.name}</li>
}