// Create shout function that returns an argument in uppercase.
function shout(string) {
  return string.toUpperCase()
}
// Create whisper function that returns an argument in lowercase.
function whisper(string) {
  return string.toLowerCase()
}
// Create logShout function that logs an argument in uppercase.
function logShout(string) {
  console.log(string.toUpperCase())
}
// Create logWhisper function that logs an argument in lowercase.
function logWhisper(string) {
  console.log(string.toLowerCase())
}
/* Create a function that returns "I can't hear you!" if string is lowercase.
Return "YES INDEED!" if string is uppercase.
Return "I love you, too" if string is "I love you, Grandma." */
function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  }
  else if (string === string.toUpperCase()){
    return "YES INDEED!";
  }
  else if (string === "I love you, Grandma."){
    return "I love you, too.";
  }
}
