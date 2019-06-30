var mentors = ["Daniel", "Irini", "Ashleigh", "Rob", "Etzali"];

function isAMentor(name) {
  return mentors.includes(name);
}

console.log("Is Rukmuni a mentor?");
console.log(isAMentor("Rukmini"));
