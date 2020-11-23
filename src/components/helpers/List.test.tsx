import React from 'react';
import {render, screen} from '@testing-library/react';
import {List} from "./List";

const TestItem = ({item, listKey}) => <li key={listKey}>{item.name}</li>
const testItems = [
    {name: "test item a"},
    {name: "test item b"},
    {name: "test item c"},
]

describe('List component', () => {

    it('should display list from array', () => {
        render(<List name="item" ListItem={TestItem} items={testItems}/>);
        expect(screen.getByText(/test item a/i)).toBeInTheDocument();
        expect(screen.getByText(/test item b/i)).toBeInTheDocument();
        expect(screen.getByText(/test item c/i)).toBeInTheDocument();
    });

    it('should display empty list message', () => {
        render(<List name="item" ListItem={TestItem} emptyList={<div>Empty Test</div>} items={[]}/>);
        expect(screen.getByText(/Empty Test/i)).toBeInTheDocument();
    });

});