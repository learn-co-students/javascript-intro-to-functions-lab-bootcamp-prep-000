//  1) logWhisper(string) calls console.log() its one argument in all lowercase:
function shout(string) {
  return string.toUpperCase()
}
//   2) sayHiToGrandma(string) returns "I can't hear you!" if `string` is lowercase:
function whisper(string) {
  return string.toLowerCase()
}
// 3) sayHiToGrandma(string) returns "YES INDEED!" if `string` is uppercase:
function logShout(string) {
  console.log(string.toUpperCase())
}
// 4) logWhisper(string) calls console.log() its one argument in all lowercase:
function logWhisper(string) {
  return console.log(string.toLowerCase())
}
// 5) sayHiToGrandma(string) returns "I can't hear you!" if `string` is lowercase:
function sayHiToGrandma(string) {
  var lowercase = string.toLowerCase()
  var uppercase = string.toUpperCase()
  if (string === lowercase) {
    return "I can't hear you!"
  } else if (string === uppercase) {
    return "YES INDEED!"
  } else if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
}
// ####### HERE IS THE SOLUTION
// function sayHiToGrandma(string) {
//   if (string.toLowerCase() === string) {
//     return "I can't hear you!"
//   }
//
//   if (string.toUpperCase() === string) {
//     return "YES INDEED!"
//   }
//
//   if (string === "I love you, Grandma.") {
//     return "I love you, too."
//   }
//
//   return "Are you eating enough?"
// }
