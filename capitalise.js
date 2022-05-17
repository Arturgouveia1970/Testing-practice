function capitalise (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(capitalise('artur'));

module.exports = capitalise;