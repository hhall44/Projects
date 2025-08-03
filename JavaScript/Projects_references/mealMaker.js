//create an object to store the values later.
const menu = {
  _meal: "",
  _price: 0,

  //use setters to allow for type checking.
  set meal(mealToCheck) {
    if (typeof mealToCheck === "string") {
      this._meal = mealToCheck;
    } else {
      console.log("Please enter the name of the meal.");
    }
  },

  set price(priceToCheck) {
    if (typeof priceToCheck === "number" && priceToCheck > 0) {
      this._price = priceToCheck;
    } else {
      throw new Error("Please enter a valid price."); //throw new Error sends a defined statement to the console. Cool!
    }
  },

  //add getters, "if (this._meal && this._price)" checks if the keys are truthy/exist
  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today's special is ${this._meal} for $${this._price}!`;
    } else {
      return "Meal or price was not set correctly!";
    }
  },
};
/* how NOT to edit the object. This does not do type checking and can lead to errors or customer confusion.
menu._meal = 15
menu._price = 'Hamburger'
console.log(menu); */

//use the setters to set the values of the object
//console.log(menu); //<- shows menu before the below setters are used.
menu.meal = "Sushi";
menu.price = 0;
console.log(menu); //shows menu after setters are used.
console.log(menu.todaysSpecial);
