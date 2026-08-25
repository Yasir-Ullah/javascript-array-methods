// Tasik :1 Create a Student Object

// Create an object named student with these properties:

// name
// age
// course
// city

// Then print all properties to the console.

let student = {
  name: "Yasir",
  age: 20,
  course: "Webdevelopment",
  city: "Peshawar",
};
console.log(student);

// Task 2: Access Object Properties

let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2024,
};

console.log(car.brand);
console.log(car.model);
console.log(car.year);

// Task 3: Add a New Property
let person = {
  name: "Yasir",
  age: 18,
  city: "Peshawar",
};

console.log(person);

// Task 4: Update a Property
let mobile = {
  brand: "Samsung",
  price: 50000,
};

console.log(mobile);

mobile.price = 60000;
console.log(mobile);

// Task 5: Delete a Property

let book = {
  title: "JavaScript",
  author: "John",
  pages: 300,
};

console.log(book);

delete book.title;
console.log(book);
