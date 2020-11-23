import React from 'react';
import {act, render, screen} from '@testing-library/react';
import {Data} from "./Data";
import {LIST_COUNTRIES, mocks} from "../../lib/countries";
import {MockedProvider} from "@apollo/client/testing";

import {CountryList} from "../content/CountryList";

describe('Data component', () => {

    it('should display loading', () => {
        render(<MockedProvider mocks={mocks} addTypename={false}>
            <Data query={LIST_COUNTRIES}><CountryList/></Data>
        </MockedProvider>);
        expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    });

    it('should display mocked country list', async () => {
        render(<MockedProvider mocks={mocks} addTypename={false}>
            <Data query={LIST_COUNTRIES}><CountryList/></Data>
        </MockedProvider>);
        expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
        await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
        expect(screen.getByText(/Andorra/i)).toBeInTheDocument();
        expect(screen.getByText(/Mock Test Country/i)).toBeInTheDocument();
    });

});