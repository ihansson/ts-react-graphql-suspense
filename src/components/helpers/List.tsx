import React from "react";
import {Message} from "./Message";
import {Col, Row} from 'antd';

export function List({name, ListItem, items, emptyList = <Message>Empty List</Message>}) {
    if (items.length === 0) return emptyList
    return (<section data-testid="list">
        <Row gutter={[8,8]}>
            {items.map((item, i) => {
                let props = {listKey: i}
                props[name] = item
                return <Col span={8}>{ListItem(props)}</Col>
            })}
        </Row>
    </section>)
}