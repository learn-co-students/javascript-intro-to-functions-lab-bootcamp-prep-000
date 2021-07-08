function shout(string) {
  string = string.toUpperCase()
  return string
}
function whisper(string){
  string = string.toLowerCase()
  return string
}
function logShout(string){
  string = string.toUpperCase()
  console.log(string)
}
function logWhisper(string){
  string = string.toLowerCase()
  console.log(string)
}
function sayHiToGrandma(string){
  if (string === string.toUpperCase()) {
    return('YES INDEED!');
}
  if (string === string.toLowerCase()){
    return('I can\'t hear you!');
  }
  if (string ==="I love you, Grandma."){
    return('I love you, too.')
}
}
