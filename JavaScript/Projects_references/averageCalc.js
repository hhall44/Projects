function getAverage(scores) {
  let rawTotal = 0; // Initialize total to 0
  let average = 0; 
  for (let i = 0; i < scores.length; i++) {
    rawTotal += scores[i]; // adds each score back to rawTotal for every iteration, leading to sim of all scores
  }
    average = rawTotal / scores.length // gets average
    return average;    

}
console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

// I could have made this more lightweight by using .reduce, but I wanted to figure this out the long way without help.

