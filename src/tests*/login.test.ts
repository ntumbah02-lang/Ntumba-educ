import { describe, it, expect } from '@jest/globals';

function validateLogin(email: string, password: string) {
  if (!email.includes('@')) return false;
  if (password.length < 6) return false;
  return true;
}

describe('Login validation', () => {
  it('should reject invalid email', () => {
    expect(validateLogin('invalid', '123456')).toBe(false);
  });
  it('should reject short password', () => {
    expect(validateLogin('test@test.com', '123')).toBe(false);
  });
  it('should accept valid credentials', () => {
    expect(validateLogin('test@test.com', '123456')).toBe(true);
  });
});
