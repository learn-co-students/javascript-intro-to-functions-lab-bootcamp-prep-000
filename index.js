function shout(string) {
  return string.toUppercCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisperer(string) {
console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  if (string === string.toLowerCase()){
  return "I can't hear you!"
} else if (string === "I love you, grandma."){
  return "I love you, too."
} else {
  return "YES INDEED!"
}
}
