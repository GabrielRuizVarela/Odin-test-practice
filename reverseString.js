function reverseString(str) {
  const array = [];
  str.split('').forEach((element, i) => {
    array[str.length - 1 - i] = element;
  });
  return array.join('');
}

export default reverseString;
