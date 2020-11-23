import React, {Suspense} from "react";
import {Data} from './Data'

export function SuspendData({children, loading, query, params = {}}) {
    return (
        <Suspense fallback={loading}>
            <Data query={query} params={params}>
                {children}
            </Data>
        </Suspense>
    )
}