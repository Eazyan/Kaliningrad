import { render, screen } from '@testing-library/react';
import App from './App';

// Мокаем react-router-dom, так как тесты не могут обрабатывать его без дополнительной настройки
jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }) => <div>{children}</div>,
  Routes: ({ children }) => <div>{children}</div>,
  Route: () => <div />,
  Navigate: () => <div />,
}));

test('рендерит заголовок приложения', () => {
  render(<App />);
  const headerElement = screen.getByText(/Petstore App/i);
  expect(headerElement).toBeInTheDocument();
});

test('рендерит футер приложения', () => {
  render(<App />);
  const yearRegex = new RegExp(new Date().getFullYear().toString(), 'i');
  const footerElement = screen.getByText(yearRegex);
  expect(footerElement).toBeInTheDocument();
});
