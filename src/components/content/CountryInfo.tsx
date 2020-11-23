import React from "react";
import {Country} from "../../lib/countries";

export function CountryInfo({country}: { country?: Country }) {
    if (!country) return null
    return (<div>
        Single Country Request: {country.name}
    </div>)
}