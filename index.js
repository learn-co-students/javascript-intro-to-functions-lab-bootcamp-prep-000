function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(hello) {
  console.log(hello.toUpperCase())
}
function logWhisper(poop) {
  console.log(poop.toLowerCase())
}
function sayHiToGrandma(old) {
  if (old === old.toLowerCase()) {
    return "I can\'t hear you!"
  } if (old === old.toUpperCase()) {
    return "YES INDEED!"
  } if (old === "I love you, Grandma.") {
    return "I love you, too."
  }
    };
