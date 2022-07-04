import capitalize from './capitalize';

test('Capitalize a single word', () => {
  expect(capitalize('hello')).toBe('Hello');
});
