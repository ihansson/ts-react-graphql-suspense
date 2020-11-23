import React from "react";
import {Country} from "../../lib/queries";
import {CountryListItem} from "./CountryListItem";
import {List} from "../helpers/List";

export function CountryList({countries = []}: { countries?: Array<Country> }) {
    return <List name="country" ListItem={CountryListItem} items={countries} />
}