'Hello!'.toUpperCase() // 'HELLO!'
function shout(string) {
  return string.toUpperCase()
}

var uppercase = "HELLO!"
uppercase.toUpperCase() === uppercase
var lowercase = 'hello!'
lowercase.toLowerCase() === lowercase
var mixedCase = 'Hi there!'
mixedCase.toLowerCase() === mixedCase
mixedCase.toUpperCase() === mixedCase

'Hello!'.toLowerCase() // 'hello!'
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log (string.toUpperCase() )
}
function logWhisper(string) {
  console.log (string.toLowerCase() )
}
function sayHiToGrandma(string) 
{
  
  if(string.toLowerCase() === string) {
    return ("I can't hear you!") ;
}
  
  else if (string.toUpperCase() === string) {
  return ("YES INDEED!") ;
}
else (string === "I love you, Grandma.") ; { 
  return ("I love you, too.")
}
}