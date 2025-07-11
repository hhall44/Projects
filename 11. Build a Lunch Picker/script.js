const lunches = [];

function addLunchToEnd(lunches, lunch) {
    lunches.push(lunch);
    console.log (`${lunch} added to the end of the lunch menu.`);
    return lunches;
}

//addLunchToEnd(lunches, "Pizza");

function addLunchToStart(lunches, lunch) {
    lunches.unshift(lunch);
    console.log(`${lunch} added to the start of the lunch menu.`);
    return lunches;
}

//addLunchToStart(lunches, "Salad");

function removeLastLunch(lunches) {
  if (lunches.length > 0) {
    const removedLunch = lunches.pop();
    console.log(`${removedLunch} removed from the end of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }
  return lunches;
}

function removeFirstLunch(lunches) {
    if (lunches.length !== 0) {
        lunches.unshift();
        console.log(`${lunches.shift()} removed from the start of the lunch menu.`);
    } else {
        console.log("No lunches to remove.");
    }
    return lunches
}

function getRandomLunch(lunches) {
    if (lunches.length === 0) {
        console.log("No lunches available.");
        return;
    } else {
        const randomIndex = Math.floor(Math.random() * lunches.length);
        const randomLunch = lunches[randomIndex];
        console.log(`Randomly selected lunch: ${randomLunch}`);
    }
}

function showLunchMenu(lunches) {
    if (lunches.length !==0) {
        console.log(`Menu items: ${lunches.join(", ")}`);
    }
    if (lunches.length === 0) {
        console.log("The menu is empty.");
    }
}

//console.log("Current lunch menu:", lunches);

removeLastLunch(["Sushi", "Pizza", "Noodles"])