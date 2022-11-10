import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';
import { AppStateProvider } from './AppStateContext';

test('renders', () => {
  render((
    <AppStateProvider>
      <App />
    </AppStateProvider>
  ));
});
