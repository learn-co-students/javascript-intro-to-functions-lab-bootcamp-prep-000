function shout(string) {
  return string.toUpperCase()
}
//The above function displays uppercase.
function whisper(string) {
  return string.toLowerCase()
}
//The above function displays lowercase.

function logShout(string) {
  console.log(shout(string));
}
//The above function displays data in the console.log

function logWhisper(string) {
  console.log(whisper(string))
}
//The above function displays lowercase words in console.log


function sayHiToGrandma(string) {
  if (string == whisper(string)) {
    return "I can't hear you!"
}
  else if (string == shout(string)) {
    return "YES INDEED!";
  }
  else (string = "I love you, Grandma.")
    return "I love you, too."
}
