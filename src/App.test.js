import { render, screen } from '@testing-library/react';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';


test('renders learn react link', () => {
  render(<React.StrictMode>
    <AppProvider>
      <Router>
        <App />
      </Router>
    </AppProvider>
  </React.StrictMode>,document.getElementById('root'));
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
