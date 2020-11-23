import {Header} from "./Header";
import {Footer} from "./Footer";
import {SuspendData} from "../data/SuspendData";
import {LIST_COUNTRIES} from "../../lib/countries";
import {Message} from "../helpers/Message";
import {CountryList} from "../content/CountryList";
import React from "react";

export const Main = () => (
    <div>
        <Header/>
        <main>
            <SuspendData
                query={LIST_COUNTRIES}
                loading={<Message>Loading Countries</Message>}>
                <CountryList/>
            </SuspendData>
        </main>
        <Footer/>
    </div>
);