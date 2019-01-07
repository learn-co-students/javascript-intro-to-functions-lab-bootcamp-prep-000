function shout(string) {
  return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}

var uppercase = "HELLO"
function logShout(string) {
  console.log(uppercase)
}
 var lowercase = "hello"
 function logWhisper(string){
   console.log(lowercase)
 }
function sayHiToGrandma(string) {
   if (string === string.toLowerCase()) {
     return "I can't hear you!"
   } else if (string === string.toUpperCase()) {
     return "YES INDEED!"
   } else if (string === "I love you, Grandma.") {
      return ("I love you, too.")
   }
 }
sayHiToGrandma("hello")
alert(sayHiToGrandma("hello"))
