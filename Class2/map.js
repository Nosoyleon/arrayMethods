var mentors = ["Daniel ", "irina ", " Gordon", "ashleigh "];

function tidy(name) {
  return name.trim().toLowerCase();
}

var tidyMentors = mentors.map(tidy);

console.log(tidyMentors);
