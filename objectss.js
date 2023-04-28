// /Given an array of objects, each object representing a person with a name and age property,
// write a function that returns a new array containing the names of all
// people who are 18 years old or older.
const persons = [
    { name: 'Ann', age: 12 },
    { name: 'Caleb', age: 24 },
    { name: 'Kerry', age: 16 },
    { name: 'Stacy', age: 13 },
  ];
  function group(persons) {
    let newcet= persons.filter(p=>p.age>=18)
    let oldcet=newcet.map(i=>i.name);
    return oldcet
  }
 console.log(group(persons));
//Write a function that takes an array of objects,
//where each object represents a product with a name, price, and category property.
// The function should return an object that groups the products by their categories,
//with the category names as keys and the arrays of products as values.
const stuffs = [
  { name: 'Charger', price: 1800, category: 'electronic' },
  { name: 'Bag', price: 40, category: 'macahn' },
  { name: 'Dress', price: 70, category: 'Clothe' },
  { name: 'Skirf', price: 90, category: 'Clothe' },
];
function given(items) {
  let things = {};
  for (let i = 0; i < items.length; i++) {
  let items = items[i];
  let receive = items.category;
  if (!things[receive]) things[receive] = [];
  things[receive].push(items);
  }
  return things;
  }
  console.log(given(receive));
  //Given an array of objects, where each object represents a student with a name
  //and an array of scores, write a function that returns a new array containing the
  //names of all students whose average score is greater than or equal to 85.
const students = [
  { name: 'Sera', marks: [40, 30, 45] },
  { name: 'Esther', marks: [75, 62, 58] },
  { name: 'Ann', marks: [70, 50, 35] },
  { name: 'Lufi', marks: [75, 80, 64] },
];
medium=students.marks
console.log(medium);
function highest(students) {
  let best = [];
  for (let i = 0; i < students.length; i++) {
    let sum = 0;
    for (let k = 0; k < students[i].marks.length; k++) {
      sum += students[i].marks[j];
    }
    const med = sum / students[i].marks.length;
    if (med >= 78) {
      highest.push(students[i].name);
    }
  }
  return highest;
}
console.log(highest(students));
//Given an object representing a car, with properties for the make, model,
// year, and a method to display the car's information, write a function that
//takes the car object and adds a new method to the object called age. The age
// method should return the current age of the car based on the current year and the car's
//year property.
const car = {
  make: 'Porsche',
  model: 'Subaru',
  year: 2022,
  display: function() {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  },
};
function year(car) {
  car.age = function() {
  let year = new Date().accomyear();
  return accomyear - this.year;
  };
  console.log(car);
  }