function shout(string) {
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(string.toUpperCase());
}

function logWhisper(string){
  console.log(string.toLowerCase());
}

/*function sayHiToGrandma(string) {
const lowercaseString = whisper(string);
const uppercaseString = shout(string);

if(string === lowercaseString) {
  return "I can\'t hear you!";
} else if (string === uppercaseString) {
  return "YES INDEED!";
} else {
  return "I love you, too.";
}
}*/

/*function sayHiToGrandma(string) {
  if (string.toLowerCase() ===
  string) {
    return "I can\'t hear you!"
  } else if (string.toUpperCase() ===
  string) {
    return "YES INDEED!"
  } else {
    return "I love you, too."
 }
 }*/

function sayHiToGrandma(string) {
  if (string === string.toUpperCase()) {
    return "YES INDEED!"
  } else if (string === string.toLowerCase()) {
    return "I can\'t hear you!"
  } else {
    return "I love you, too."
}
}
