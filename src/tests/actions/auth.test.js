import { login, logout } from '../../actions/auth';

test('should setup login action object', () => {
  const uid = '123abc';
  const result = login(uid);
  expect(result).toEqual({
    type: 'LOGIN',
    uid
  });
});

test('should setup login action object', () => {
  const result = logout();
  expect(result).toEqual({
    type: 'LOGOUT'
  });
});