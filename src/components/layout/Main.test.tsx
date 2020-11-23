import React from 'react';
import {act, render, screen} from '@testing-library/react';
import {Main} from "./Main";
import {mocks} from "../../lib/countries";
import {MockedProvider} from "@apollo/client/testing";

describe('Main component', () => {

    it('should display header and footer', () => {
        render(<MockedProvider mocks={mocks} addTypename={false}><Main/></MockedProvider>);
        expect(screen.getByText(/React GraphQL Test/i)).toBeInTheDocument();
        expect(screen.getByText(/2020/i)).toBeInTheDocument();
    });

    it('should display loading message', () => {
        render(<MockedProvider mocks={mocks} addTypename={false}><Main/></MockedProvider>);
        expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    });

    it('should display mocked country list', async () => {
        render(<MockedProvider mocks={mocks} addTypename={false}><Main/></MockedProvider>);
        expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
        await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
        expect(screen.getByText(/Andorra/i)).toBeInTheDocument();
        expect(screen.getByText(/Mock Test Country/i)).toBeInTheDocument();
    });

});