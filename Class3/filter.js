var mentorsAges = [15, 20, 25, 18, 17, 47];

function isAdult(age) {
  return age >= 18;
}

var adultMentors = mentorsAges.filter(isAdult);

console.log("Ages " + adultMentors);
