import React from "react";
import {Continent} from "../../lib/countries";
import {ContinentListItem} from "./ContinentListItem";
import {List} from "../helpers/List";
import {Message} from "../helpers/Message";

export function ContinentList({continents = []}: { continents?: Array<Continent> }) {
    return <List name="continent"
                 ListItem={ContinentListItem}
                 items={continents}
                 emptyList={<Message>No Countries Found</Message>}/>
}