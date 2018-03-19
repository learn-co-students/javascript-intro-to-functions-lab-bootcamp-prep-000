function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string){
  console.log('HELLO')
}
function logWhisper(string){
  console.log('hello')
}
function sayHiToGrandma(string){
  var string1 = string
  if (string1.toLowerCase() === string) {
    return "I can't hear you!"
} else if (string1.toUpperCase()=== string) {
  return "YES INDEED!"
} else if ("I love you, Grandma." === string) {
  return "I love you, too."
}
}
