function stringlength(str) {
  if (str.length < 1 || str.length > 10) {
    return 'invalid length';    
  }
  return str.length;
} 
console.log(stringlength('Manch'));

module.exports = stringlength;