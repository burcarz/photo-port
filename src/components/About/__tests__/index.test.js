import React from 'react';
import { render, cleanup }  from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// cleanup dom elements after tests to avoid memory leaks
afterEach(cleanup);

describe('About component', () => {
    // check if the component renders
    it('renders', () => {
        render(<About />);
    });
    // check if the component matches a serialized version of the node structure
    it('matches snapshot DOM node structure', () => {
        // return snapshot of about component
        const { asFragment } = render(<About />);
        // expect the fragment to match the snapshot
        expect(asFragment()).toMatchSnapshot();
    })
})
