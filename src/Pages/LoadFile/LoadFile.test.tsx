import "@testing-library/jest-dom";
import { render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { LoadFile } from ".";
import { BrowserRouter, Routes, Route } from "react-router-dom";

describe("LoadFile", () => {
    test("Should be able to see the initial text with a button on screen", () => {
        const { getByTestId } = render(
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<LoadFile />} />
            </Routes>
        </BrowserRouter>
        );

        expect(getByTestId("initial-message")).toBeInTheDocument();
        expect(getByTestId("file-input")).toBeInTheDocument();
    })
})