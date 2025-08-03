function largestOfAll(arrOfArrs) {
  const largestNumbers = [];

  for (let i = 0; i < arrOfArrs.length; i++) {
    const currentSubArray = arrOfArrs[i];
    let largestInSubArray = -Infinity; // Initialize with a very small number

    for (let j = 0; j < currentSubArray.length; j++) {
      if (currentSubArray[j] > largestInSubArray) {
        largestInSubArray = currentSubArray[j];
      }
    }
    largestNumbers.push(largestInSubArray);
  }
  return largestNumbers;
}
