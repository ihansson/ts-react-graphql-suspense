import React from "react";
import {CountryIfo} from "../../lib/countries";
import {Card} from "antd";

export function CountryInfo({country}: { country?: CountryIfo }) {
    if (!country) return null
    return (<Card size="small" title={country.name}>
        <strong>Code:</strong> {country.code}<br/>
        <strong>Native:</strong> {country.native}<br/>
        <strong>Phone:</strong> {country.phone}<br/>
        <strong>Continent:</strong> {country.continent.name}<br/>
        <strong>Capital:</strong> {country.capital}<br/>
        <strong>Currency:</strong> {country.currency}<br/>
    </Card>)
}