// LeetCode Problem 9: Palindrome Number

x = 101; // change number to test function

var isPalindrome = function (x) {
  let xSplitArr = x.toString().split("");
  let xReverseArr = [];
//   console.log(xSplitArr); checking array methods

  do {
    xReverseArr += xSplitArr.pop();
  } while (xSplitArr.length > 0);
//   console.log(xSplitArr); checking array methods
//   console.log(xReverseArr); checking array methods
//   console.log(xReverseArr.toString()); checking array methods
//   console.log(x.toString()) checking array methods

  if (xReverseArr.toString() === x.toString()) {
    return true;
  } else return false;
};

console.log(isPalindrome(x)); // calling console.log to check the return output