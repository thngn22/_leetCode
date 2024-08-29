/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const arr = s.split("");
  let stack = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(" || arr[i] === "[" || arr[i] === "{") {
      stack.push(arr[i]);
    } else {
      if (
        (arr[i] === ")" && stack[stack.length - 1] === "(") ||
        (arr[i] === "]" && stack[stack.length - 1] === "[") ||
        (arr[i] === "}" && stack[stack.length - 1] === "{")
      ) {
        stack.pop();
        continue;
      }

      return false;
    }
  }
  return !stack.length;
};

console.log(isValid("( { [ } ) ]"));
