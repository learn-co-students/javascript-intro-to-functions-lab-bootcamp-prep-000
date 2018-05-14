function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  var string = "HELLO"
  string.toUpperCase() === string
  console.log(string)
}
function logWhisper(string){
  var string = "hello"
  string.toLowerCase() === string
  console.log(string)
}
function sayHiToGrandma(string){
  if (string.toLowerCase() === string)
   return "I can't hear you!"
  if (string.toUpperCase() === string)
   return "YES INDEED!"
  else (string === "I love you, Grandma.")
  return "I love you, too."  
}
