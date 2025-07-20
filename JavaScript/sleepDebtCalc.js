function getSleepHours(day) {
  switch (day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 6;
      break;
    case 'wednesday':
      return 8;
      break;
    case 'thursday':
      return 7;
      break;
    case 'friday':
      return 5;
      break;
    case 'saturday':
      return 10;
      break;
    case 'sunday':
      return 7;
      break;
    default:
      return 'Error...';
  }
}

function getActualSleepHours() {
  return getSleepHours('monday') +
          getSleepHours('tuesday') +
          getSleepHours('wednesday') +
          getSleepHours('thursday') +
          getSleepHours('friday') +
          getSleepHours('saturday') +
          getSleepHours('sunday');
}

function getIdealSleepHours(idealHours) {
  return idealHours * 7;
  
}

function calculateSleepDebt() {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);
  const sleepDif = idealSleepHours - actualSleepHours;

  if(actualSleepHours === idealSleepHours) {
    console.log('You got your ideal amount of sleep this week.');
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You got ${Math.abs(sleepDif)} more hours of sleep than you needed.`);
  } else if (actualSleepHours < idealSleepHours) {
    console.log(`You got ${Math.abs(sleepDif)} less hours than your ideal sleep hours.`);
  } else {
    console.log('Computer Error, please reload.');
  }
}
calculateSleepDebt();
