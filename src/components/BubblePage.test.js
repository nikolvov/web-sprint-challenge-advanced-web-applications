import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen, waitFor} from "@testing-library/react";
import BubblePage from './BubblePage';
import {fetchColorService as mockFetch} from '../services/fetchColorService';

jest.mock("../services/fetchColorService")

const data = [
    {code: "#f0f8ff", color: "aliceblue", id: 1}
    {}
]

test("Renders without errors", async () => {
    mockFetch.mockResolvedValueOnce({ data: [] });
    render(<BubblePage />);
    await waitFor(() {
        const heading = screen.getByText(/Bubbles/i)
        expect(heading).toHaveTextContent("Bubbles")
    }
    // screen.debug()
});

test("Renders appropriate number of colors passed in through mock", async ()=> {
    //Keep in mind that our service is called on mount for this component.
    mockFetch.mockResolvedValueOnce(data); 
});