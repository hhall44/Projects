const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop');
  }
}
};
const tinCan = robotFactory('P-500', true);
tinCan.beep();
console.log(tinCan);

// short hand in ES6:

const robotFactory = (model, mobile) => {
  return {
    model, //omits part of the above "model: model", but still returns the same function. 
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)