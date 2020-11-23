import React, {Suspense} from "react";
import {Data} from './Data'

export function SuspendData({children, loading, query}) {
    return (
        <Suspense fallback={loading}>
            <Data query={query}>
                {children}
            </Data>
        </Suspense>
    )
}