function shout(string) {
  // receives one argument and returns it in all caps
  return string.toUpperCase()
}
'Hello'.toUpperCase()

function whisper(string) {
  // receives one argument and returns it in all lowercase.
  return string.toLowerCase()
}
'Samson'.toUpperCase()

function logShout(string) {
  // calls console.log() its one argument in all caps.
  console.log('HELLO'.toUpperCase())
}
'HELLO'

function logWhisper(string) {
  //calls console.log() its one argument in all lowercase.
  console.log('hello'.toLowerCase())
}
'hello'

function sayHiToGrandma(string) {
  if (string === string.toLowerCase())
  return "I can't hear you!"
  else if (string === string.toUpperCase())
  return "YES INDEED!"
  else (string === "I love you, Grandma.")
  return `I love you, too.`
}
"I love you, Grandma."