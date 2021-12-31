module.exports = function reverse (n) {
let n_str = Math.abs(n).toString(); // take absolute value and transform number to string
return [...n_str].reverse().join(''); // spread number intu array, reverse and join back

}
