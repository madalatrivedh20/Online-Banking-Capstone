import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import NewFD from './NewFD';

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
        <NewFD />
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
        <NewFD />
      </Router>
    </AppStateProvider>
  );

  expect(screen.getByRole("heading")).toHaveTextContent(/Fixed Deposit/);
  expect(screen.getByPlaceholderText("Enter your account no")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Select FD Type")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Select FD Period")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Enter amounr")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Create Fixed Deposit" })).toBeInTheDocument();
});