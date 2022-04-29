import { PasswordToggler } from '../src/index';

describe('Password Toggler Test', () => {
  // Test password Toggler
  test('password Toggler', () => {
    PasswordToggler.init({ selectors: '.special-input' });
    expect(PasswordToggler.init).toBeDefined();
  });
});
