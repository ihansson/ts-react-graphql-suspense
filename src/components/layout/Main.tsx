import {Header} from "./Header";
import {Footer} from "./Footer";
import {SuspendData} from "../data/SuspendData";
import {CONTINENTS_AND_COUNTRIES, COUNTRY} from "../../lib/countries";
import {Message} from "../helpers/Message";
import {CountryList} from "../content/CountryList";
import {CountryInfo} from "../content/CountryInfo";
import React from "react";

export const Main = () => (
    <div>
        <Header/>
        <main>
            <SuspendData
                query={COUNTRY}
                params={{country: "SE"}}
                loading={<Message>Loading Countries</Message>}>
                <CountryInfo/>
            </SuspendData>
            <SuspendData
                query={CONTINENTS_AND_COUNTRIES}
                loading={<Message>Loading Countries</Message>}>
                <CountryList/>
            </SuspendData>
        </main>
        <Footer/>
    </div>
);