function shout(string){
  var string_new = string.toUpperCase()
  return string_new
}

function whisper(string){
  var string_new = string.toLowerCase()
  return string_new
}

function logShout(string){
console.log (string.toUpperCase() )
}

function logWhisper(string){
console.log (string.toLowerCase() )
}

function sayHiToGrandma(string){
  if (string === string.toLowerCase() ) {
  return "I can\'t hear you!"
}
  if (string === string.toUpperCase() ) {
  return "YES INDEED!"
}

  if (string === "I love you, Grandma." ) {
  return "I love you, too."
}
}
