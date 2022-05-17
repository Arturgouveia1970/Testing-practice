function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString('artur'));

module.exports = reverseString;