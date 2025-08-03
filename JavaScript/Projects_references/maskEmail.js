function maskEmail(email) {
  const atIndex = email.indexOf("@");
  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex);
  const maskedUsername = username.slice(0, 1) + "*".repeat(username.length - 2);
  const lastChar = username.slice(-1);

  return maskedUsername + lastChar + domain;
}

let email = "testemail@email.com";

console.log(maskEmail("apple.pie@example.com"));

console.log(maskEmail("freecodecamp@example.com"));

console.log(maskEmail("info@test.dev"));

console.log(maskEmail("user@domain.org"));

console.log(maskEmail(email));
