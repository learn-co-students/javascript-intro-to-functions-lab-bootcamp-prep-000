function shout(string) {
return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function sayHiToGrandma(string){
if (string === "HELLO")
  return("YES INDEED!")
else if (string === "hello")
return("I can't hear you!")
else if (string === "I love you, Grandma.")
return("I love you, too.")
}
function logShout(string){
  console.log("HELLO")
}
logShout()
function logWhisper(string){
  console.log("hello")
}
logWhisper()