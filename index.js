// function shout takes one argument string, and returns that string in call caps using the toUpperCase() built-in method
function shout(string) {
  return string.toUpperCase();
};

// function whisper takes one argument string, and returns that string in all lowercase using the toLowerCase buil-tin method
function whisper(string) {
  return string.toLowerCase();
};

//function logShout takes one argument string, and prints the argument value in upper-case to the console

function logShout(string) {
  console.log(string.toUpperCase());
};

//function logWhisper takes one argument string, and prints the argument value in lower-case to the console

function logWhisper(string) {
  console.log(string.toLowerCase());
};

//function sayHiToGrandma takes one argument string, using multiple else if statements and checks whether the value of string is in upper-case,lower-case or matches "I love you, Grandma" and returns the appropriate code block accordingly

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return "I can't hear you!"
  } else if (string.toUpperCase() === string) {
    return "YES INDEED!"
  } else if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
}
