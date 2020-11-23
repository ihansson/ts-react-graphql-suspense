import React, {Fragment} from "react";
import {Message} from "../helpers/Message";
import {useQuery} from "@apollo/client";

export function Data({children, query}) {
    const {data, loading, error} = useQuery(query)
    if (loading || error) {
        return <Message>{error ? error.message : 'Loading...'}</Message>;
    }
    return (
        <Fragment>
            {React.cloneElement(children, data)}
        </Fragment>
    )
}