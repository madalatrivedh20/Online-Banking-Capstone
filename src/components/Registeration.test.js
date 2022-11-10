import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Registration from './Registration';

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
        <Registration />
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
        <Registration />
      </Router>
    </AppStateProvider>
  );

  expect(screen.getByRole("heading")).toHaveTextContent(/Registration/);
  expect(screen.getByPlaceholderText("Enter your First Name")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Select Account Type")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Select Security Question")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Enter your Security Question Answer")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Enter your Account Number")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Enter your Email")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Enter your Password")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Re-Enter your Password")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Register" })).toBeInTheDocument();
});