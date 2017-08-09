function shout (str) {
  return str.toUpperCase();
}

function whisper (str) {
  return str.toLowerCase();
}

function logShout(str) {
  console.log(str.toUpperCase());
}

// function sayHiToGrandma(string){
//
// }

function logWhisper (str) {
  console.log(str.toLowerCase())
}

function sayHiToGrandma(string){
  if (string === string.toUpperCase()) {
    return "YES INDEED!"
  } else if (string === "I love you, Grandma.") {
    return "I love you, too."
  } else if (string === string.toLowerCase()) {
    return "I can't hear you!"
  }
}
