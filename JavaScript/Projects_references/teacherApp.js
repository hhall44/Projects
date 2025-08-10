//get average score
function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

// get letter grade
function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// check if student is passing
function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

// send message about passing/failing
function studentMsg(totalScores, studentScore) {
  if (getGrade(studentScore) === "F") {
      return ("Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". You failed the course.")
    } else if (getGrade(studentScore) !== "F") {
      return ("Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". You passed the course.")
    } 
  }
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
