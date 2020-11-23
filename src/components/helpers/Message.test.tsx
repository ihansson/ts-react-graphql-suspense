import React from 'react';
import {render, screen} from '@testing-library/react';
import {Message} from "./Message";

describe('Message component', () => {

    it('should display message', () => {
        render(<Message>Test Message</Message>);
        expect(screen.getByText(/Test Message/i)).toBeInTheDocument();
    });

    it('should have default style', () => {
        render(<Message>Test Message</Message>);
        const msg = screen.getByTestId('message')
        expect(msg).toHaveClass('is-default')
    });

    it('should optionally style message', () => {
        render(<Message type="is-danger">Test Message</Message>);
        const msg = screen.getByTestId('message')
        expect(msg).toHaveClass('is-danger')
    });

});