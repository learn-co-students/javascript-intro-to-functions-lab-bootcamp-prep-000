function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) return "I can't hear you!";
  else if (string === string.toUpperCase()) return "YES INDEED!"
  else if (string === "I love you, Grandma.") return "I love you, too.";
}

sayHiToGrandma("hello");
sayHiToGrandma("HELLO");
sayHiToGrandma("I love you, Grandma.");

// After two hours, I realized that my approach, initially, was very rigid. I expected an algorithm/function to adapt & mold itself around a
// set of static variables when I should've thought of it as a static algorithm that could handle diverse variables.
// I also hadn't yet figured out that I could chain two functions on the same line, or separate lines with semicolons - but now I know lmao.
