//Remember that string in this case is the parameter name! 
function shout(string) {
  return string.toUpperCase();
}
function whisper(string) {
  return string.toLowerCase();
}
function logShout(string) {
  console.log(string.toUpperCase());
}
function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) { //HI, hi, "I love..."
  if (string.toUpperCase() === string) {
    return "YES INDEED!"
  } else if (string.toLowerCase() === string) {
    return "I can\'t hear you!"
  } else if (string = "I love you, Grandma") {
    return "I love you, too."
  }
}