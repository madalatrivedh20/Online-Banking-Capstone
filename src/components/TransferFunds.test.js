import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import renderer from 'react-test-renderer';
import TransferFunds from './TransferFunds';

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
        <TransferFunds />
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
        <TransferFunds />
      </Router>
    </AppStateProvider>
  );

  expect(screen.getByRole("heading")).toHaveTextContent(/Transfer Funds/);
  expect(screen.getByPlaceholderText("From Account Number")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Select beneficiary")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Beneficiary Account Number")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Beneficiary IFSC Code")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Enter account type")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Enter Amount")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Enter Remarks")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Transfer Funds" })).toBeInTheDocument();
});