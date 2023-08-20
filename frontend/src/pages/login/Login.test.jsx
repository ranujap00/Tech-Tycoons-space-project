import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import { MemoryRouter } from 'react-router-dom';
import Login from './Login';

jest.mock('axios');

describe('Login Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('submits the form with valid credentials and navigates', async () => {
    axios.post.mockResolvedValue({ data: '64de63473aaa6865292d227d' });
    const { getByLabelText, getByText } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const usernameInput = getByLabelText('Gemenide ID');
    const passwordInput = getByLabelText('Password');
    const submitButton = getByText('Login');

    fireEvent.change(usernameInput, { target: { value: 'testusername' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(sessionStorage.getItem('userId')).toBe('64de63473aaa6865292d227d');
    });
  });

  it('shows error message for incorrect credentials', async () => {
    axios.post.mockResolvedValue({ data: '' });
    const { getByLabelText, getByText } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const usernameInput = getByLabelText('Gemenide ID');
    const passwordInput = getByLabelText('Password');
    const submitButton = getByText('Login');

    fireEvent.change(usernameInput, { target: { value: 'testusername' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(sessionStorage.getItem('userId')).toBeNull();
      expect(getByText('Username or password is incorrect')).toBeInTheDocument();
    });
  });

  it('shows validation error for empty fields', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    const submitButton = getByText('Login');

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(getByText('Gemenide ID is required')).toBeInTheDocument();
      expect(getByText('Password is required')).toBeInTheDocument();
    });
  });

  it('shows validation error for invalid credentials', async () => {
    const { getByLabelText, getByText } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const usernameInput = getByLabelText('Gemenide ID');
    const passwordInput = getByLabelText('Password');
    const submitButton = getByText('Login');

    fireEvent.change(usernameInput, { target: { value: 'testusername' } });
    fireEvent.change(passwordInput, { target: { value: '' } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(getByText('Password is required')).toBeInTheDocument();
    });
  });
});