var uppercase = "HELLO!"
uppercase.toUpperCase() === uppercase //true

var lowercase = "hello!"
lowercase.toLowerCase() === lowercase //true

var mixedCase = "Hi there!"
mixedCase.toLowerCase() === mixedCase //false
mixedCase.toUpperCase() === mixedCase //false

"Hello!".toUpperCase() // "HELLO!"

function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function love(string) {
  return string()
}

function logShout(spy) {
  console.log("HELLO")
}

function logWhisper(spy) {
  console.log("hello")
}

function logLove(spy) {
  console.log("I love you, Grandma.")
}

//function sayHiToGrandma(string) {
//  if (whisper) {
//    return "I can\'t hear you!";
//} else if (shout) {
//    return "YES INDEED!";
//} else if (love) {
//    return "I love you, too.";
//} else {
//}
//}

function sayHiToGrandma(string){
   if (string === string.toLowerCase()) return "I can't hear you!";
   else if (string === string.toUpperCase()) return "YES INDEED!";
   else if (string === "I love you, Grandma.") return "I love you, too.";
 }

 sayHiToGrandma("hello");
 sayHiToGrandma("HELLO");
 sayHiToGrandma("I love you, Grandma.");
