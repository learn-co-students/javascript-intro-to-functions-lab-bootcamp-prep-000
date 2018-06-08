function shout(string) {
  return(string).toUpperCase()
}

function whisper(string) {
  return(string).toLowerCase()
}

function logShout(string) {
  console.log(shout("hello"))
}

function logWhisper(string) {
  console.log(whisper("HELLO"))
}

var uppercase = "HELLO"
var lowercase = "hello"
var iloveyou = "I love you, Grandma."

function sayHiToGrandma(string) {
  
   if (string === lowercase) { return("I can't hear you!") }
   
   else if (string === uppercase) { return("YES INDEED!") }
   
   else if (string === iloveyou) { return("I love you, too.") }
  
}

