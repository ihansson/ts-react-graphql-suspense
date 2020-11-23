import {client} from "../../lib/countries";
import React, {Fragment} from "react";
import gqlsuspense from 'graphql-suspense'
import {Message} from "../helpers/Message";

export function Data({children, query}) {
    const {data, loading, error} = gqlsuspense(client.query, {query})
    if (loading || error) {
        return <Message>{error ? error.message : 'Loading...'}</Message>;
    }
    return (
        <Fragment>
            {React.cloneElement(children, data)}
        </Fragment>
    )
}