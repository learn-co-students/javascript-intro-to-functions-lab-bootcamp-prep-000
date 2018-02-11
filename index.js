function shout(string) {
  return string.toUpperCase()
}
function whisper(string2) {
  return string2.toLowerCase()
}
function logShout(string3) {
  console.log(string3.toUpperCase())
}
function logWhisper(string4) {
  console.log(string4.toLowerCase())
}
function sayHiToGrandma(string5) {
  if (string5.toLowerCase() === string5) { return "I can't hear you!" }
  if (string5.toUpperCase() === string5) { return "YES INDEED!" }
  if (string5 === "I love you, Grandma.") { return "I love you, too." }
}