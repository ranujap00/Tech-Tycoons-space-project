import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import Payment from './Payment';

jest.mock('axios');

describe('Payment Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    sessionStorage.setItem(
      'bookingValues',
      JSON.stringify({
        fullName: 'Ranuja Perera',
        email: 'ranujaperera@gmail.com',
        country: 'Sri Lanka',
        DOB: '2000-07-03',
        noOfSeats: 2,
      })
    );
  });

  it('submits the form with valid payment details', async () => {
    const mockedPost = axios.post.mockResolvedValue({});
    const { getByLabelText, getByText } = render(<Payment />);

    const uNetworkNumberInput = getByLabelText('U Network Number');
    const securityCodeInput = getByLabelText('Security Code');
    const payButton = getByText('Pay Now');

    fireEvent.change(uNetworkNumberInput, { target: { value: '1234567890' } });
    fireEvent.change(securityCodeInput, { target: { value: '123' } });

    fireEvent.click(payButton);

    await waitFor(() => {
      expect(mockedPost).toHaveBeenCalledWith('http://localhost:8070/addBooking', {
        bookingValues: {
          fullName: 'Ranuja Perera',
          email: 'ranujaperera@gmail.com',
          country: 'Sri Lanka',
          DOB: '2000-07-03',
          noOfSeats: 2,
        },
        uNetworkNumber: '1234567890',
        securityCode: '123',
      });
      expect(getByText('Booking data and payment details stored successfully.')).toBeInTheDocument();
    });
  });

  it('shows error message for failed API call', async () => {
    axios.post.mockRejectedValue(new Error('API error'));

    const { getByLabelText, getByText } = render(<Payment />);

    const uNetworkNumberInput = getByLabelText('U Network Number');
    const securityCodeInput = getByLabelText('Security Code');
    const payButton = getByText('Pay Now');

    fireEvent.change(uNetworkNumberInput, { target: { value: '1234567890' } });
    fireEvent.change(securityCodeInput, { target: { value: '123' } });

    fireEvent.click(payButton);

    await waitFor(() => {
      expect(getByText('Error storing booking data and payment details.')).toBeInTheDocument();
    });
  });

  it('shows validation errors for empty fields', async () => {
    const { getByText } = render(<Payment />);
    const payButton = getByText('Pay Now');

    fireEvent.click(payButton);

    await waitFor(() => {
      expect(getByText('U Network Number is required')).toBeInTheDocument();
      expect(getByText('Security Code is required')).toBeInTheDocument();
    });
  });
});
