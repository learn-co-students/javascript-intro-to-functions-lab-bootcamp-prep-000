// define function shout
function shout(string) {
  return string.toUpperCase() // returns string in all caps
}
// define function whisper
function whisper(string) {
  return string.toLowerCase() // returns string in all lowercase
}
// define function logShout
function logShout(string) {
  console.log(string.toUpperCase()) // returns string in all caps 
}
// define function logWhisper
function logWhisper(string) {
  console.log(string.toLowerCase()) //returns string in all lowercase
}
// define function sayHiToGrandma
function sayHiToGrandma(string) {
  if (string === string.toUpperCase()) { // Checks if string is all caps
  return "YES INDEED!" // returns YES INDEED! if string is all caps
}
 if (string === string.toLowerCase()) { //Checks if string is all lowercase
  return "I can't hear you!" // returns I can't hear you if string is all lowercase
}
  if (string === "I love you, Grandma.") { // Checks if string is I love you, Grandma
  return "I love you, too." // returns I love you, too 
}
}

