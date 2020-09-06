function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log(shout(string))
}
function logWhisper(string) {
  console.log(whisper(string))
}
function sayHiToGrandma(sentence) {
 if (sentence === "I love you, Grandma.")
  return "I love you, too.";
 else if (sentence === whisper(sentence))
  return "I can't hear you!";
 else if (sentence === shout(sentence))
  return "YES INDEED!";
}