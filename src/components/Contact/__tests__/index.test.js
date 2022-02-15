import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactForm from '..';

// const categories = [
//     { name: 'portraits', description: 'Portraits of people in my life' }
// ]
// const mockCurrentCategory = jest.fn();
// const mockSetCurrentCategory = jest.fn();
// const mockContactSelected = jest.fn();
// const mockSetContactSelected = jest.fn();

afterEach(cleanup);

describe('ContactForm is rendering', () => {
    it('renders', () => {
        render(<ContactForm />)
    });
    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm />)
        expect(asFragment()).toMatchSnapshot()
    });
    it('renders', () => {
        const { getByTestId } = render(<ContactForm />)
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
    });
    it('renders', () => {
        const { getByTestId } = render(<ContactForm />)
        expect(getByTestId('submit')).toHaveTextContent('Submit')
    })
})