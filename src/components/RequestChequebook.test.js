import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import renderer from 'react-test-renderer';
import RequestChequebook from './RequestChequebook';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { AppStateProvider } from '../AppStateContext';

it('Snapshot Test', () => {
  const component = renderer.create(
    <AppStateProvider>
      <Router>
        <RequestChequebook />
      </Router>
    </AppStateProvider>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders the page', async () => {
  render(
    <AppStateProvider>
      <Router>
        <RequestChequebook />
      </Router>
    </AppStateProvider>
  );

  expect(screen.getByText("Request a New Checkbook")).toBeInTheDocument();
  expect(screen.getByText("Billing Address")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Account Number")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Enter your State")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Enter your City")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Enter your Pincode")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Enter your Address")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Select Priority")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Raise a request" })).toBeInTheDocument();
});