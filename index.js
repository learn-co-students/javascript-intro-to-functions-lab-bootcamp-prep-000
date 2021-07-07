function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  var hello = string.toUpperCase()
  console.log(hello)
}
function logWhisper(string) {
  var pib = string.toLowerCase()
  console.log(pib)
}
function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
     return "I can't hear you!"
} else if (string === string.toUpperCase()) {
     return "YES INDEED!"
} else if (string === "I love you, Grandma."){
     return "I love you, too."	 }}