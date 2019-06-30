var mentors = ["Daniel", "Irini", "Ashleigh", "Rob", "Etzali"];

function isAMentor(name, from) {
  return mentors.includes(name, from);
}

console.log("Is Daniel a mentor?");
console.log(isAMentor("Daniel", 0));
console.log(isAMentor("Daniel", 1));
