import React, {Suspense} from "react";
import {Message} from "../helpers/Message";
import {Data} from "../data/Data";
import {CONTINENTS_AND_COUNTRIES, COUNTRY} from "../../lib/countries";
import {CountryInfo} from "../content/CountryInfo";
import {CountryList} from "../content/CountryList";
import {ContinentList} from "../content/ContinentList";

export const Home = () => (
    <Suspense fallback={<Message>Loading</Message>}>
        <Data
            query={COUNTRY}
            params={{country: "SE"}}>
            <CountryInfo/>
        </Data>
        <Data
            query={CONTINENTS_AND_COUNTRIES}>
            <ContinentList/>
            <CountryList/>
        </Data>
    </Suspense>
)