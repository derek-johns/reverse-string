// With built-in functions.
/*
function reverseString(str) {
    let finalStr = str.split('').reverse().join('');
    return finalStr;
}
*/

// Without built-in functions.
function reverseString(str) {
    finalStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        finalStr += str[i];
    }
    return finalStr;
}

console.log(reverseString('hello'));