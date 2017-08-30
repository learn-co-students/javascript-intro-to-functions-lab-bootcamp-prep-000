function shout(yell) {
  return yell.toUpperCase()
}
function whisper(quiet) {
  return quiet.toLowerCase()
}
function logShout(conyell) {
  console.log (conyell.toUpperCase())
}
function logWhisper(conquiet) {
 console.log(conquiet.toLowerCase())
}
function sayHiToGrandma(x) {
  if (x === x.toLowerCase()){
    return "I can't hear you!"
  }
  if (x === x.toUpperCase()) {
    return "YES INDEED!"
  }
  if (x === "I love you, Grandma."){
    return "I love you, too."
  }
}
