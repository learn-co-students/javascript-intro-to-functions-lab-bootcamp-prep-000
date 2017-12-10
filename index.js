function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

// == means checks for comparison to see if equal in value, but does not check to see if equal in type. (x=5 means  x=="5" is true)  

function sayHiToGrandma(string) {
if (string == string.toLowerCase()) {
  return "I can\'t hear you!";
  
}else if (string == string.toUpperCase()) {
  return  "YES INDEED!";
  
} else if (string == "I love you, Grandma.") {
  return "I love you, too."}
}





