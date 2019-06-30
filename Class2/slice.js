// Check with Primtive types
var teaching = { class: "Javascript" };

var mentors = ["Daniel", "Irini", "Ashleigh", "Rob", "Etzali", teaching];

// Reference

var slicedMentors = mentors.slice(2, 3);
console.log("sliced mentors", mentors);
console.log("sliced mentors", slicedMentors);

// Changing refrence

var copiedMentors = mentors.slice();
mentors[0] = "Daniel Mod";
teaching.class = "Javascript 2";

console.log("Mod");
console.log(mentors);
console.log(copiedMentors);

// Examples
console.log("default", mentors.slice()); //Result
console.log("last?", mentors.slice(10)); //Result
console.log("From 1 to penultimate", mentors.slice(1, -1));
console.log("First 2", mentors.slice(0, 2));
console.log("From 2", mentors.slice(2));
console.log("Last 2", mentors.slice(-2));
