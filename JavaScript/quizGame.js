const questions = [
    {
        category: "General Knowledge",
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris"],
        answer: "Paris"
    },
    {
        category: "Science",
        question: "What is the chemical symbol for water?",
        choices: ["H2O", "CO2", "O2"],
        answer: "H2O"
    },
    {
        category: "History",
        question: "Who was the first President of the United States?",
        choices: ["George Washington", "Thomas Jefferson", "Abraham Lincoln"],
        answer: "George Washington"
    },
    {
        category: "Geography",
        question: "Which country is known as the Land of the Rising Sun?",
        choices: ["China", "Japan", "South Korea"],
        answer: "Japan"
    },
    {
        category: "Literature",
        question: "Who wrote 'Romeo and Juliet'?",
        choices: ["Mark Twain", "Charles Dickens", "William Shakespeare"],
        answer: "William Shakespeare"
    },
];

let randomQuestion = [questions[Math.floor(Math.random() * questions.length)]];


function getRandomQuestion(randomQuestion) {
    const randomIndex = Math.floor(Math.random() * randomQuestion.length);
    return randomQuestion[randomIndex];
}
function getRandomComputerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

console.log(getRandomQuestion(randomQuestion).question);
console.log(getRandomComputerChoice(randomQuestion[0].choices));


function getResults(question, computerChoice) {
    if (computerChoice === question.answer) {
        return "The computer's choice is correct!";
    } else {
        return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
    }
}

console.log(getResults(randomQuestion[0], getRandomComputerChoice(randomQuestion[0].choices)));

//TODO this finally worked, not fully sure why...