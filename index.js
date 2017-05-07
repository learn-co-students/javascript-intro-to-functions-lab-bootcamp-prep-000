function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  var string = string.toUpperCase()
  console.log(string) 
}
function logWhisper(string) {
  var string = string.toLowerCase()
  console.log(string) 
}
function  sayHiToGrandma(string) {
if (string === string.toLowerCase())
{string = "I can't hear you!"}
else 
if (string === string.toUpperCase()) 
{string = "YES INDEED!"}
else 
if (string === "I love you, Grandma.")
{string = "I love you, too."}
return string
}