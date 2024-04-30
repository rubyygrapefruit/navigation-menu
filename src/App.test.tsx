import { render, screen } from '@testing-library/react';
import App from './App';
import { copy, menuData } from './DefaultData/pageData';

test('renders App', () => {
  render(<App />);
  const title = screen.getByText(copy.title);
  expect(title).toBeInTheDocument();


});

test('render top nav', () => {
  render(<App />);

  let topNavTitles = menuData.map((menu) => {
    return menu.name
  })

  const title = screen.getByText(topNavTitles[0]);
  expect(title).toBeInTheDocument();
})
