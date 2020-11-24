import React, {Suspense} from "react";
import {Message} from "../helpers/Message";
import {Data} from "../data/Data";
import {COUNTRY} from "../../lib/countries";
import {CountryInfo} from "../content/CountryInfo";
import {useParams} from 'react-router-dom'

interface CountryParams {
    id: string
}

export const Country = () => {
    const { id } : CountryParams = useParams()
    return (<Suspense fallback={<Message>Loading</Message>}>
        <Data
            query={COUNTRY}
            params={{country: id}}>
            <CountryInfo/>
        </Data>
    </Suspense>)
}