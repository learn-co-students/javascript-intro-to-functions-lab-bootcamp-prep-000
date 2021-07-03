function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log("HELLO")
}
function logWhisper(string) {
  console.log("hello")
}

// function sayHiToGrandma(string) {
//   var string = "I love you, Grandma."
//   string.uppercase
//   string.lowercase
//   return "I love you, too"
// }
function sayHiToGrandma(string) {
  var lowercase = string.toLowerCase()
  var uppercase = string.toUpperCase()
  if(string === lowercase) {
     return "I can't hear you!"
  } if(string === uppercase)  {
      return "YES INDEED!"
  } 
    return "I love you, too."
  
}