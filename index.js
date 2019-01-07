function shout(string) {
  return string.toUpperCase()
}
shout('Hello!')

function whisper(string) {
  return string.toLowerCase()

}
whisper('Hello!')

function logShout(string) {
  console.log(shout(string))
}
logShout('Hello')

function logWhisper(string) {
  console.log(whisper(string))
}
logWhisper('Hello')

function sayHiToGrandma(string) {
  console.log("I can't hear you!")
}
sayHiToGrandma('Hello')

function sayHiToGrandma(string) {
  if (string === string.toUpperCase())
    return "YES INDEED!"

  ;else if (string === string.toLowerCase())
    return "I can't hear you!"

  ;else if (string === "I love you, Grandma.")
    return "I love you, too.";
}
