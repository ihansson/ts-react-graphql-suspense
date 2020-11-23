import React from 'react';
import {render, screen} from '@testing-library/react';
import {CountryList} from "./CountryList";

const testCountries = [{
    name: 'Test Country Name A'
}, {
    name: 'Test Country Name B'
}]

describe('CountryList component', () => {

    it('should display countries', () => {
        render(<CountryList countries={testCountries}/>);
        expect(screen.getByText(/Test Country Name A/i)).toBeInTheDocument();
        expect(screen.getByText(/Test Country Name B/i)).toBeInTheDocument();
    });

    it('should display no countries found message', () => {
        render(<CountryList countries={[]}/>);
        expect(screen.getByText(/No Countries Found/i)).toBeInTheDocument();
    });

});