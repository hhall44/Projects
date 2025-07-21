let input = 'I am now communicating in whale speak, my tutor was Dory!';
const inputLowerCase = input.toLowerCase();
const vowels = ['a', 'e', 'i', 'o', 'u',];
const resultArray = [];
for (let i = 0; i < inputLowerCase.length; i++) {
  //console.log(i); <- counts the length of the input.
  if(inputLowerCase[i] === 'e' || inputLowerCase[i] === 'u') {
    resultArray.push(inputLowerCase[i]); }
  for(j = 0; j < vowels.length; j++) {
    //console.log(j); <- checks to see if the nested loop works. You should see 0,1,2,3,4 repeated input.length number of times
    if(inputLowerCase[i] === vowels[j]) {
      //adds the result to the resultArray.
      resultArray.push(inputLowerCase[i]);
    }
  }
}

//console.log(resultArray) //<- check to see if the results got written to the resulArray
// you first have to join the array to let toUpperCase work!
const resultString = resultArray.join("").toUpperCase();
console.log(`Your input was: "${input}". This is how to say it in Whale Talk "${resultString}"`);
