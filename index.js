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
  var lowercase = "I can't hear you"
  var uppercase = "YES INDEED!"
  var lovegrandma = "I love you, to"
  if (string === string.toLowerCase()) {
    return "I can't hear you!"
 }else if (string === "I love you, Grandma.") {
   return "I love you, too."
 }else if (string === string.toUpperCase())
  return "YES INDEED!"
 
}

sayHiToGrandma("hello");
sayHiToGrandma("HELLO");
sayHiToGrandma("I love you, Grandma.");
