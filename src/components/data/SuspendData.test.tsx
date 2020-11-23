import React from 'react';
import {act, render, screen} from '@testing-library/react';
import {SuspendData} from "./SuspendData";
import {CONTINENTS_AND_COUNTRIES, mocks} from "../../lib/countries";
import {MockedProvider} from "@apollo/client/testing";

import {CountryList} from "../content/CountryList";
import {Message} from "../helpers/Message";

const loadingMessage = () => <Message>Loading</Message>

describe('Data component', () => {

    it('should display loading', () => {
        render(<MockedProvider mocks={mocks} addTypename={false}>
            <SuspendData query={CONTINENTS_AND_COUNTRIES} loading={loadingMessage}><CountryList/></SuspendData>
        </MockedProvider>);
        expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    });

    it('should display mocked country list', async () => {
        render(<MockedProvider mocks={mocks} addTypename={false}>
            <SuspendData query={CONTINENTS_AND_COUNTRIES} loading={loadingMessage}><CountryList/></SuspendData>
        </MockedProvider>);
        expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
        await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
        expect(screen.getByText(/Andorra/i)).toBeInTheDocument();
        expect(screen.getByText(/Mock Test Country/i)).toBeInTheDocument();
    });

});