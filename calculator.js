const calculator = {
  add(...array) {
    return array.reduce((previous, current) => previous + current);
  },
  subtract(...array) {
    return array.reduce((previous, current) => previous - current);
  },
  divide(...array) {
    return array.reduce((previous, current) => previous / current);
  },
  multiply(...array) {
    return array.reduce((previous, current) => previous * current);
  },
  caesarCipher(str, key) {
    const splitStr = str.split('');
    const cipher = [];
    splitStr.forEach((element, i) => {
      let newKey = key;
      let code = element.charCodeAt();
      switch (true) {
        case (code === 32):
          newKey = 0;
          break;
        case ((code >= 97 && code <= 122) && (code + key > 122)):
          code = code - 122 + 96;
          break;
        case ((code >= 65 && code <= 90) && (code + key > 90)):
          code = code - 90 + 64;
          break;
        case (!(code >= 97 && code <= 122) && !(code >= 65 && code <= 90)):
          newKey = 0;
          break;
        default:
          newKey = key;
      }
      cipher[i] = String.fromCharCode(code + newKey);
    });
    return cipher.join('');
  },
};

// a=97,z=122, A=65, Z=90

export default calculator;
