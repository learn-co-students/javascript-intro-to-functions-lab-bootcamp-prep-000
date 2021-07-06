function shout(string) {
  return string.toUpperCase()
}
shout("Hello")
function whisper(string) {
  return string.toLowerCase()
}
whisper("HELLO")

function logShout(string) {
  console.log('HELLO')
}
logShout('hello')

function logWhisper(string) {
  console.log('hello')
}
logWhisper('HELLO')

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
  return "I can\'t hear you!";
  } else if (string.toUpperCase() === string) {
  return "YES INDEED!";
  } else if (string === "I love you, Grandma.") {
  return "I love you, too.";
  }
};
