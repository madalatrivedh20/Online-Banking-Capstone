import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Login from './Login';

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
        <Login />
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
        <Login />
      </Router>
    </AppStateProvider>
  );

  expect(screen.getByRole("heading")).toHaveTextContent(/Login/);
  expect(screen.getByPlaceholderText("Enter your Email")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Enter your Password")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Log In" })).toBeInTheDocument();
});