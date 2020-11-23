import React from "react";
import {Message} from "./Message";

export function List({name, ListItem, items, emptyList = <Message>Empty List</Message>}) {
    if (items.length === 0) return emptyList
    return (<ul data-testid="list">
        {items.map((item, i) => {
            let props = {listKey: i}
            props[name] = item
            return ListItem(props)
        })}
    </ul>)
}