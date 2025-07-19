let userName = '';
userName = 'Huston';
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
let userQuestion = 'Is today going to be a good day?';
if (userName == '') { 
  console.log(`The question is: ${userQuestion}`); 
} else {
  console.log(`${userName}'s question is: ${userQuestion}`);
}
const randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
// Assigns a response to the variable 'eightBall' based off the random number selected from 'randomNumber' and the associated string. 
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
   case 3:
    eightBall = 'Cannot predict now';
    break;
   case 4:
    eightBall = 'Do not count on it';
    break;
   case 5:
    eightBall = 'My sources say no';
    break;
   case 6:
    eightBall = 'Outlook not so good';
    break;
   case 7:
    eightBall = 'Signs point to yes';
    break;
  default:
    eightBall = 'There was an error on my part, please try again';
}
if (eightBall) {
console.log(eightBall);
}