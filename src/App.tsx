import React from 'react'
import {LIST_COUNTRIES} from "./lib/queries";
import {Message} from "./components/helpers/Message";
import {SuspendData} from "./components/data/SuspendData";
import {CountryList} from "./components/content/CountryList";

function App() {
    return (
        <SuspendData
            query={LIST_COUNTRIES}
            loading={<Message>Loading Countries</Message>}
            >
            <CountryList/>
        </SuspendData>
    );
}

export default App;
