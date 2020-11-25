import React, {Suspense} from "react";
import {Message} from "../helpers/Message";
import {Data} from "../data/Data";
import {CONTINENTS_AND_COUNTRIES} from "../../lib/countries";
import {ContinentList} from "../content/ContinentList";

export const Home = () => (
    <Suspense fallback={<Message>Loading</Message>}>
        <Data
            query={CONTINENTS_AND_COUNTRIES}>
            <ContinentList/>
        </Data>
    </Suspense>
)