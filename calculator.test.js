import calculator from './calculator';

test('should add two numbers or more', () => {
  expect(calculator.add(2, 5)).toBe(7);
  expect(calculator.add(2, 3, 4, 5)).toBe(14);
});
test('should subtract two numbers or more', () => {
  expect(calculator.subtract(2, 5)).toBe(-3);
  expect(calculator.subtract(2, 3, 4, 5)).toBe(-10);
});
test('should divide two numbers or more', () => {
  expect(calculator.divide(2, 5)).toBeCloseTo(2 / 5);
  expect(calculator.divide(2, 3, 4, 5)).toBeCloseTo((2 / 3 / 4 / 5));
});
test('should multiply two numbers or more', () => {
  expect(calculator.multiply(2, 5)).toBeCloseTo(2 * 5);
  expect(calculator.multiply(2, 3, 4, 5)).toBeCloseTo((2 * 3 * 4 * 5));
});
test('should cypher a char', () => {
  expect(calculator.caesarCipher('a', 5)).toBe('f');
});
test('should cypher a string', () => {
  expect(calculator.caesarCipher('helloz', 5)).toBe('mjqqte');
});
test('should cypher a Capitalize string', () => {
  expect(calculator.caesarCipher('HELLOZ', 5)).toBe('MJQQTE');
});
test('should cypher a complex string', () => {
  expect(calculator.caesarCipher('Hi this is a Caesar Cipher tEsT', 10)).toBe('Rs drsc sc k Mkockb Mszrob dOcD');
});
test('should cypher lowercase and uppercase letter, spaces and other caracters', () => {
  expect(calculator.caesarCipher('!', 10)).toBe('!');
});
test('should cypher lowercase and uppercase letter, spaces and other caracters', () => {
  expect(calculator.caesarCipher('abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVXYZ !@#$%()[]', 10)).toBe('klmnopqrstuvwxyzabcdefghij KLMNOPQRSTUVWXYZABCDEFHIJ !@#$%()[]');
});
