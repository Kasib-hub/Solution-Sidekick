// test that loginpage renders correctly with vitest
import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import LoginPage from '../src/pages/LoginPage';

describe('LoginPage', () => {
  it('renders correctly', () => {
    const { getByText } = render(<LoginPage />);
    expect(getByText('Login to Save Solution!')).toBeDefined();
  });
})


