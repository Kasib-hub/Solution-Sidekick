// test that loginpage renders correctly with vitest
import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import LoginPage from '../src/pages/LoginPage';
import { AuthProvider } from '../src/context/AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';


describe('LoginPage', () => {
  it('LoginPage renders correctly', () => {
    const { getByText } = render(<Router><AuthProvider><LoginPage /></AuthProvider></Router>);
    expect(getByText('Login to Save Solution!')).toBeDefined();
  });
})




