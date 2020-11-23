import React from 'react';
import {render, screen} from '@testing-library/react';
import {Footer} from "./Footer";

describe('Footer component', () => {

    it('should display creation year', () => {
        render(<Footer/>);
        expect(screen.getByText(/2020/i)).toBeInTheDocument();
    });

});