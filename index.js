function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log('hello'.toUpperCase())
}
function logWhisper(string) {
  console.log('HELLO'.toLowerCase())
}
function sayHiToGrandma(string) {
    var lowercase = string
    var uppercase = string
    var mixedCase = string
    if (lowercase.toLowerCase() === lowercase) {
      return "I can't hear you!"
    } else if (uppercase.toUpperCase() === uppercase) {
      return "YES INDEED!"
    } else if ("I love you, Grandma." === mixedCase) {
      return "I love you, too."
    }

}
