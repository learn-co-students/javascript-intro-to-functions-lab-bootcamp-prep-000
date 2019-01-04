function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logshout(string){
  console.log(string.toUpperCase())
}

function logwhisper(string){
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  if (string === string.toLowerCase()){
  return "I can\'t hear you!"}
  if (string === string.toUpperCase()){
  return "YES INDEED!"}
  if (string === 'I love you, Grandma.'){
  return "I love you, too."}
}