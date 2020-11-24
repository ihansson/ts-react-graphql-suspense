import React from 'react';
import {render, screen} from '@testing-library/react';
import {CountryListItem} from "./CountryListItem";

const testCountry = {
    name: 'Test Country Name',
    code: 'MK',
    continent: {
        name: 'Test Continent',
        code: 'MK'
    }
}

describe('CountryListItem component', () => {

    it('should display country', () => {
        render(<CountryListItem listKey="1" country={testCountry}/>);
        expect(screen.getByText(/Test Country Name/i)).toBeInTheDocument();
    });

});