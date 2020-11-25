import React from "react";
import {Continent} from "../../lib/countries";

export function ContinentHeader({continent}: { continent?: Continent }) {
    if (!continent) return null
    return (<h1>{continent.name} ({continent.code})</h1>)
}