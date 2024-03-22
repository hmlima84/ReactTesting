import React from "react";
import Card from './Card';
import { render, fireEvent } from '@testing-library/react';


it('renders without crashing', () => {
    render(<Card />)
})

it('matched card', () => {
    const {asFragment} = render(<Card />);
    expect(asFragment()).toMatchSnapshot()
})