import React from 'react';
import {render, screen} from '@testing-library/react';
import {Header} from "./Header";

describe('Header component', () => {

    it('should display project title', () => {
        render(<Header/>);
        expect(screen.getByText(/React GraphQL Test/i)).toBeInTheDocument();
    });

});