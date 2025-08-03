"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("./products");
const productName = "hoodie";
// find productName from array in products.ts
const product = products_1.default.filter((product) => {
  return product.name === productName;
})[0];
if (product.preOrder) {
  console.log(
    "This item is pre-order. We will send you a message when its shipped."
  );
}
let shipping;
let taxPercent;
let taxTotal;
let total;
let shippingAddress = "123 Make Believe Drive, Austin, TX";
// checks if price qualifies for free shipping and assigns shipping value.
if (Number(product.price) > 25) {
  shipping = 0;
  console.log("Your purchase qualified for free shipping!");
} else {
  shipping = 5;
  console.log(
    `Your shipping is $${shipping}. If you want free shipping, the item must be at least $25.`
  );
}
// check if shipping address is in new york for additional tax rate
if (shippingAddress.match("New York")) {
  taxPercent = 0.1;
  console.log(
    `An Additional ${taxPercent} has been added for New York resident sales`
  );
} else {
  taxPercent = 0.05;
}
taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;
console.log(
  `Purcahse details: ${productName}, Shipping Address: ${shippingAddress}, Product Price: ${Number(
    product.price
  )}, Tax: ${taxTotal}, Shipping: ${shipping}, Total: ${total}.`
);
