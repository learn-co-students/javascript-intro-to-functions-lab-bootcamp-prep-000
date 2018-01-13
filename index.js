function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function sayHiToGrandma(string) { 
  if (string.toLowerCase() === string) {
    return 'I can\'t hear you!' } 
  else if (string.toUpperCase() === string) {
    return 'YES INDEED!' } 
  else { return "I love you, too." } 
}

function logShout(string) { 
  if (string.toLowerCase() === string) {
  console.log(`HELLO`)}
}

function logWhisper(string) { 
  if (string.toUpperCase() === string) {
  console.log(`hello`)}
}