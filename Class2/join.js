var sentence = ["This", "is", "the", "javascript", "class"];

console.log("default: " + sentence.join());
console.log("separator: " + sentence.join(" "));
console.log("separator: " + sentence.join(", "));
console.log("no space: " + sentence.join(""));
console.log("escape: " + sentence.join("\n"));
