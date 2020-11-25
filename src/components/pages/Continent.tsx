import React, {Suspense} from "react";
import {Message} from "../helpers/Message";
import {Data} from "../data/Data";
import {CONTINENT_COUNTRIES} from "../../lib/countries";
import {useParams} from 'react-router-dom'
import {CountryList} from "../content/CountryList";
import {ContinentHeader} from "../content/ContinentHeader";

interface ContinentParams {
    id: string
}

export const Continent = () => {
    const { id } : ContinentParams = useParams()
    return (<Suspense fallback={<Message>Loading</Message>}>
        <Data
            query={CONTINENT_COUNTRIES}
            params={{continent: id, code: id}}>
            <ContinentHeader/>
            <CountryList/>
        </Data>
    </Suspense>)
}