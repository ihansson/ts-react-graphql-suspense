import {Continent} from "../../lib/countries";
import React from "react";
import {Link} from "react-router-dom";
import {Card} from 'antd';

export function ContinentListItem({continent, listKey}: { continent: Continent, listKey: string }) {
    return <Card size="small" key={listKey} title={continent.name} extra={<Link to={`/continent/${continent.code}`}>View Countries</Link>}>
        <p><strong>Code:</strong> {continent.code}</p>
    </Card>

}