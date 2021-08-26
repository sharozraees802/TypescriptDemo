/**
 * @test {App}
 * this is a test is prdefine is commit
 */

// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from "react";
import { render, screen } from "@testing-library/react";
import App from './App'
describe("AppComponent", () => {
  it("renders Heading", () => {
    render(<App />);
    const headerElement  = screen.getByText(/Getting Started With React/i);
    expect(headerElement ).toBeInTheDocument();
  });
});
