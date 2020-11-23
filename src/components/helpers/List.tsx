import React from "react";

export function List({name, ListItem, items}) {

    return (<ul>
        {items.map((item, i) => {
            let props = {key: i}
            props[name] = item
            return ListItem(props)
        })}
    </ul>)
}