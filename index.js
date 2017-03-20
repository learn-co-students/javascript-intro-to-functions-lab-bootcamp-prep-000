function shout(string) {
  return string.toUpperCase("Hello!")
}
function whisper(string) {
  return string.toLowerCase("Hello!")
}
function logShout(string) {
  console.log(string.toUpperCase("Hello"))
}
function logWhisper(string) {
  console.log(string.toLowerCase("Hello"))
}
function sayHiToGrandma(string){
  if (string.toLowerCase() === string){
  return "I can't hear you!"}
  if (string.toUpperCase() === string){
  return "YES INDEED!"}
  if (string === "I love you, Grandma."){
  return "I love you, too."}
}
