function shout(string) {
  return string.toUpperCase()
}

shout("Hello");

function whisper(string) {
  return string.toLowerCase()
}

whisper("THIS SHOULD BE IN CAPS BUT NOW LOWERCASE")

function logShout(string) {
  return console.log(string.toUpperCase())
}

logShout("this is a whisper turned into a shout")

function logWhisper(string) {
  return console.log(string.toLowerCase())
}

logWhisper("THIS WAS A SHOUTING COMMAND")

function sayHiToGrandma(string) {
 if (string === string.toLowerCase()) return "I can't hear you!"
 if (string === string.toUpperCase()) return "YES INDEED!"
 if (string === "I love you, Grandma.") return "I love you, too."
}

sayHiToGrandma("hello")
sayHiToGrandma("CAN YOU HEAR ME NOW!?")
sayHiToGrandma("I love you, Grandma.")