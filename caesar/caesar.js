const isLetter = (char) => char.match(/^[^a-zA-Z]+$/);
const isLowerCase = (char) => char === char.toLowerCase();
const isUpperCase = (char) => char === char.toUpperCase();

const caesar = (string, shift) => {
  let result = '';
  for (let i = 0; i < string.length; i += 1) {
    if (isLetter(string.charAt(i))) {
      result += string.charAt(i);
    } else if (isLowerCase(string.charAt(i))) {
      result += String.fromCharCode(((string.charCodeAt(i) + shift - 97) % 26) + 97);
    } else if (isUpperCase(string.charAt(i))) {
      result += String.fromCharCode(((string.charCodeAt(i) + shift - 65) % 26) + 65);
    }
  }
  return result;
};

export default caesar;