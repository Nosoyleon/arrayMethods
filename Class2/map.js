//Map also creates  a copy

var mentors = ["Daniel ", "irina ", " Gordon", "ashleigh "];
var ages = [17, 15, 29, 32, 13];

function mapArguments(element, index, array) {
  console.log("element: ", element, "index", index, "array", array);
  return element;
}

function tidy(name) {
  return name.trim().toLowerCase();
}

function gettingOld(age) {
  return age * 2;
}

function someYearsAgo(age, years) {
  return age - years;
}

// Simple map
var tidyMentors = mentors.map(tidy);
console.log("tydy mentors", tidyMentors);

// Operations
var oldMentors = ages.map(gettingOld);
console.log("getting old", oldMentors); //Operations

// Aditional parameters

var fiveYearsAgo = ages.map(age => someYearsAgo(age, 5));
console.log("5 years ago", fiveYearsAgo);

// Mapping objects

var mentors = [
  { name: "Simba", age: 25 },
  { name: "Jesse", age: 26 },
  { name: "Crispa", age: 27 }
];

// Arrow function

var mentosrNames = mentors.map(mentor => mentor.name);

console.log("Mentors names", mentosrNames);

function addDoubleAge(mentor) {
  mentor["doubleAge"] = mentor.age * 2;
  return mentor;
}

var modMentors = mentors.map(addDoubleAge);

console.log("Double Age", modMentors);

console.log("Better understanding");
mentors.map(mapArguments);
