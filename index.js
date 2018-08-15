function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
var uppercase = "HELLO"
uppercase.toUpperCase() === uppercase

  console.log("HELLO")
}

function logWhisper(string) {
var lowercase = "hello"
lowercase.toLowerCase() === lowercase
console.log("hello")
}

function sayHiToGrandma(string) {

  if (string === string.toLowerCase()) {
    return "I can't hear you!"
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!"
  } else if (string === "I love you, Grandma.") {
    return "I love you, too."
  }

}
