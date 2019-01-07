function shout(string) {
return string.toUpperCase()
  }
function whisper(string){
  return string.toLowerCase()
}
function logShout(string) {
  console.log("HELLO")
}
function logWhisper(string) {
  console.log("hello")
}
var lowercase = "I can't hear you!"
lowercase.toLowerCase() === lowercase // true
var mixedCase = "I love you, too."
mixedCase.toLowerCase() === mixedCase // false
mixedCase.toUpperCase() === mixedCase // false
var uppercase = "YES INDEED!"
uppercase.toUpperCase() === uppercase
function sayHiToGrandma(lowercase) {
return "I can't hear you!"
}
function sayHiToGrandma(uppercase) {
return "YES INDEED!"
}
function sayHiToGrandma(mixedCase) {
return "I love you, too"
}
