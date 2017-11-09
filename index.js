function  shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log(string.toUpperCase());
}
function logWhisper(string) {
  console.log(string.toLowerCase());
}
var uppercase = "HELLO!"
var lowercase = 'hello!'
var mixedCase = 'Hi there!'
var lower = "I can't hear you!"
var upper = "YES INDEED!"
var love =  "I love you, too."

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return `${lower}`;
  } else if (string.toUpperCase() === string) {
    return `${upper}`;
  } else if (string === `I love you, Grandma.`) {
    return `${love}`;
  }  else {
    console.log("FALSE!")
  }
}
