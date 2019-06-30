var mentors = [
  { name: "Daniel", age: 26 },
  { name: "irina", age: 16 },
  { name: "Gordon", age: 18 },
  { name: "ashleigh", age: 10 }
];

function findByAge(mentor, age) {
  return mentor.age === age;
}

//What if I need to send more params to the function?

const ageToFind = 16;

var found = mentors.find(mentor => findByAge(mentor, ageToFind));

console.log("Find: " + found.name);
