import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import ChangePin from './ChangePin';

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
        <ChangePin />
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
        <ChangePin />
      </Router>
    </AppStateProvider>
  );

  expect(screen.getByRole("heading")).toHaveTextContent(/Change PIN/);
  expect(screen.getByPlaceholderText("Enter old PIN")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Enter new PIN")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Re-enter new PIN")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Change ATM PIN" })).toBeInTheDocument();
});