import {Country} from "../../lib/queries";
import React from "react";

export function CountryListItem({country}:{country: Country}) {
    return <li>{country.name}</li>
}