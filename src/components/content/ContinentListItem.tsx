import {Continent} from "../../lib/countries";
import React from "react";
import {Link} from "react-router-dom";

export function ContinentListItem({continent, listKey}: { continent: Continent, listKey: string }) {
    return <li key={listKey}><Link to={`/continent/${continent.code}`}>{continent.name}</Link></li>
}