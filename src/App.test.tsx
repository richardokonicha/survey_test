// testing the App component mounted with success

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("Is App Healthy", () => {
  it("App is rendered", () => {
    render(<App />);
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });
})