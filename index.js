function shout (string){
  return string.toUpperCase()
}
function whisper (string){
  return string.toLowerCase()
}
function logShout (string){
  console.log (string.toUpperCase())
  var uppercase = "HELLO!"
uppercase.toUpperCase() === uppercase 
}
function logWhisper (string){
  console.log (string.toLowerCase())
  var lowercase = "hello!"
lowercase.toLowerCase() === lowercase 
}
function sayHiToGrandma(string){
  if (string===whisper(string)){
  return ("I can't hear you!")}
 else if (string===shout(string)){
  return ("YES INDEED!") }
else if (string=== "I love you, Grandma."){
  return ("I love you, too.")
}

}