function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}

var uppercase = "HELLO"

var lowercase = "hello"

var love = "I love you, Grandma."

function sayHiToGrandma(uppercase) {
  if (uppercase.toUpperCase() === uppercase)
  return "YES INDEED!"
}

function sayHiToGrandma(lowercase) {
  if (lowercase.toLowerCase() === lowercase)
  return "I can't hear you!"
}

function sayHiToGrandma(love) {
  if (love === "I love you, Grandma.")
  return "I love you, too"
}