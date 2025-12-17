import { apiKey, abc as content } from "./util.js";
import apiKey2 from "./util.js";
import * as util from "./util.js";

console.log(apiKey);
console.log(apiKey2);
console.log(util.apiKey);
console.log(content);

// const userMessage = "Hello World!!!";

// console.log(userMessage);
// console.log(userMessage);

// function createGreeting(userName, message = "Hello!") {
// console.log(userName);
// console.log(message);
//   return "Hi, I am " + userName + ". " + message;
// }

// const greeting1 = createGreeting("Max");
// console.log(greeting1);

// const greeting2 = createGreeting("Manuel", "Hello, what's up?");
// console.log(greeting2);

// export default (userName, message) => {
//  console.log("Hello");
//   return userName + message;
// };

// const user = {
//   name: "Max",
//   age: 34,
//   greet() {
//     console.log("Hello!");
//     console.log(this.age);
//   }
// };

// console.log(user.name);
// user.greet();

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hi!");
    console.log(this.name);
    console.log(this.age);
  }
}

const user1 = new User("Manuel", 35);
console.log(user1);
user1.greet();

const hobbies = ["Sports", "Cooking", "Reading"];
// console.log(hobbies[0]);
console.log(hobbies.entries().next().value);

// hobbies.push("Working");
// console.log(hobbies);

const index = hobbies.findIndex((item) => item === "Sports");

console.log(index);

const editedHobbies = hobbies.map((item) => ({ text: item }));
console.log(editedHobbies);

// const [firstName, lastName] = ["Max", "Schwarzmüller"];

// const firstName = userNameData[0];
// const lastName = userNameData[1];

// console.log(firstName);
// console.log(lastName);

// const { name: userName, age } = {
//   name: "Max",
//   age: 34
// };

// console.log(userName);
// console.log(age);

// const name = user.name;
// const age = user.age;

const hobbies2 = ["Sports", "Cooking", "Gaming"];
const user = {
  name: "Max",
  age: 34,
};

const newHobbies = ["Reading", "Traveling", "Photography"];

const mergedHobbies = [...hobbies2, ...newHobbies];
console.log(hobbies2); // print the array as a single value
console.log(...hobbies2); // print each item of the array as a separate value
console.log(mergedHobbies); // print the merged array

// const extendedUser = {
//   isAdmin: true,
//   ...user
// };
// console.log(extendedUser);

// const password = prompt("Your password");

// if (password === "Hello") {
//   console.log("Hello works");
// } else if (password === "hello") {
//   console.log("hello works");
// } else {
//   console.log("Access not granted.");
// }

// const hobbies = ["Sports", "Cooking"];

for (const hobby of hobbies) {
  console.log(hobby);
}

// const list = document.querySelector("ul");
// list.remove();

// function handleTimeout() {
//   console.log("Timed out!");
// }

// const handleTimeout2 = () => {
//   console.log("Timed out ... again!");
// };

// setTimeout(handleTimeout, 2000);
// setTimeout(handleTimeout2, 3000);
// setTimeout(() => {
//   console.log("More timing out...");
// }, 4000);

// function init() {
//   function greet() {
//     console.log(“Hi!“);
//   }

//   greet();
// }

// init();

// const message = “Hello”;

// const hobbies = ["Sports", "Cooking"];
// // hobbies = [];
// hobbies.push("Working");
// console.log(hobbies);
