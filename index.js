function shout(string) {
  return string.toUpperCase()
} shout("hello")

function whisper(string) {
  return string.toLowerCase()
} whisper("HELLO")

function logShout(string) {
  console.log(string.toUpperCase())
} console.log('Hello');

function logWhisper(string) {
  console.log(string.toLowerCase())
} console.log('HELLO');

function sayHiToGrandma(string) {
  if (whisper(string) === string) {
    return "I can\'t hear you!"
  }else if (shout(string) === string) {
    return "YES INDEED!"
  }else return "I love you, too."
    
}
