/*
Filename: ComplexCode.js
Content: Complex and Elaborate Javascript Code
*/

// Module to generate random numbers
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Array of names
const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Henry", "Ivy", "John"];

// Function to generate a random name from the names array
const generateRandomName = () => {
  const randomIndex = random(0, names.length - 1);
  return names[randomIndex];
};

// Class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old!`);
  }
}

// Function to generate a random age between 18 and 65
const generateRandomAge = () => {
  return random(18, 65);
};

// Creating an instance of Person class
const person = new Person(generateRandomName(), generateRandomAge());

// Function to generate a random array of numbers
const generateRandomArray = (length, min, max) => {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(random(min, max));
  }
  return arr;
};

// Sorting the array in ascending order
const sortArray = (arr) => {
  return arr.sort((a, b) => a - b);
};

// Function to calculate the sum of an array
const calculateSum = (arr) => {
  return arr.reduce((sum, num) => sum + num, 0);
};

// Function to calculate the average of an array
const calculateAverage = (arr) => {
  const sum = calculateSum(arr);
  return sum / arr.length;
};

// Example usage of the functions and classes defined above
console.log("Generated random name:", person.name);
console.log("Generated random age:", person.age);

const randomArray = generateRandomArray(10, 1, 100);
console.log("Generated random array:", randomArray);

const sortedArray = sortArray(randomArray);
console.log("Sorted array:", sortedArray);

const sum = calculateSum(sortedArray);
console.log("Sum of array:", sum);

const average = calculateAverage(sortedArray);
console.log("Average of array:", average);

person.sayHello();

// ... More sophisticated and elaborate code below ...