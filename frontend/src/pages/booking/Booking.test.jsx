import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Booking from './Booking';
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Booking Component', () => {
  beforeEach(() => {
    useNavigate.mockClear();
  });

  it('submits the form with valid data and navigates', async () => {
    const navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);

    const { getByLabelText, getByText } = render(<Booking />);

    const fullNameInput = getByLabelText('Full Name');
    const emailInput = getByLabelText('Email');
    const seatsInput = getByLabelText('Number of Seats');
    const submitButton = getByText('Continue');

    fireEvent.change(fullNameInput, { target: { value: 'Ranuja Perera' } });
    fireEvent.change(emailInput, { target: { value: 'ranujaperera@gmail.com' } });
    fireEvent.change(seatsInput, { target: { value: '2' } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(sessionStorage.getItem('bookingValues')).toEqual(
        JSON.stringify({
          fullName: 'Ranuja Perera',
          email: 'ranujaperera@gmail.com',
          country: '',
          DOB: '',
          noOfSeats: 2,
        })
      );

      expect(navigateMock).toHaveBeenCalledWith('/payment');
    });
  });

  it('shows validation errors for empty fields', async () => {
    const { getByText } = render(<Booking />);
    const submitButton = getByText('Continue');

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(getByText('Full Name is required')).toBeInTheDocument();
      expect(getByText('Email is required')).toBeInTheDocument();
      expect(getByText('Number of Seats is required')).toBeInTheDocument();
    });
  });

  it('shows validation error for invalid email', async () => {
    const { getByLabelText, getByText } = render(<Booking />);
    const emailInput = getByLabelText('Email');
    const submitButton = getByText('Continue');

    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(getByText('Invalid email')).toBeInTheDocument();
    });
  });
});
