var mentors = [
  { name: "Daniel", age: 26 },
  { name: "irina", age: 16 },
  { name: "Gordon", age: 18 },
  { name: "ashleigh", age: 10 }
];

function isAdult(mentor) {
  return mentor.age >= 18;
}

function mentorName(mentor) {
  return mentor.name;
}

function formatName(name) {
  return name.toLowerCase();
}

var adultMentors = mentors.filter(isAdult);
var mentorsNames = adultMentors.map(mentorName);

console.log("Mentors: " + mentorsNames);

// Concat Methods

var adultMentorsFormated = mentors
  .filter(isAdult)
  .map(mentorName)
  .map(formatName)
  .join("|");

console.log("Mentors: " + adultMentorsFormated);
