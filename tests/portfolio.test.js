import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Portfolio from '../components/Portfolio';

describe('Portfolio', () => {
  test('renders portfolio card', () => {
    render(<Portfolio />);
    const cardElement = screen.getByText(/Andres Guzman/i);
    expect(cardElement).toBeInTheDocument();
  });

  test('switches sections when navigation button is clicked', () => {
    render(<Portfolio />);
    const aboutButton = screen.getByText(/About/i);
    const experienceButton = screen.getByText(/Experience/i);
    const contactButton = screen.getByText(/Contact/i);

    fireEvent.click(experienceButton);
    const experienceSection = screen.getByText(/Work Experience/i);
    expect(experienceSection).toBeInTheDocument();

    fireEvent.click(contactButton);
    const contactSection = screen.getByText(/Contact/i);
    expect(contactSection).toBeInTheDocument();
  });
});
