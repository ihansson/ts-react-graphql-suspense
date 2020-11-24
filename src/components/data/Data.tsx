import React, {Fragment} from "react";
import {Message} from "../helpers/Message";
import {useQuery} from "@apollo/client";

export function Data({children, query, params = {}}) {
    const {data, loading, error} = useQuery(query, {variables: params})
    if (loading || error) {
        return <Message>{error ? error.message : 'Loading...'}</Message>;
    }
    return (
        <Fragment>
            {React.Children.map(children, child => React.cloneElement(child, data))}
        </Fragment>
    )
}