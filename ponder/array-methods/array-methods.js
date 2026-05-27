// 1. JavaScript Arrays
const names = ["Olive", "Charles", "Eliza"];
console.log(names);

console.log(names[1]);
console.log(names[names.length - 1]);

let ages = [8, 6, 2];

let mixArray = ["Olive", 8, "Charles,", 6, "Eliza", 2];
console.log(mixArray);

// 2. JavaScript Objects
let studentName = "Bob";
let studentClass = "WDD131";

// literal objects
let student = {
    // key/value pairs
    name : "Bob",
    class : "WDD131",
    grade : "A",
    age : 27
}

console.log(student);
console.log(student.class);

// 3. Array ethods
names.forEach((name)=> {
    // this code executes once per each item in the array
    console.log(name);
})

// Map function returns a NEW array with values returned from function
let newNameArray = names.map((name) => {
    return name + " Warner";
})

console.log(newNameArray);

let filteredArray = names.filter((name) => {
    // filter returns boolean, True keep, flase don't keep
    return names.includes("e");
})

console.log(filteredArray);

// reduce method: runs through the items in an array through a function
// and stores themm in one final value
const numbers = [175, 50, 25];

const result = numbers.reduce(difference);

function difference(total, num) {
  return total - num;
}

console.log(result);

// indexOf returns the index value of the item
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let index = fruits.indexOf("Apple");

// prints 2
console.log(index);

// Template literals

// Defines html into a const
const movieSummary = `
  <div class="movie-summary">
    <h2>${movie.title}</h2>
    <p>${movie.genre} - ${stars}</p>
  </div>
`;

// Adds template to #movie-list
document.getElementById("movie-list").innerHTML += movieSummary;  