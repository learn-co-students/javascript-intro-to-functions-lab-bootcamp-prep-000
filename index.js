function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  var str1 = string.toUpperCase()
  console.log(str1)

}
function logWhisper(string){
  var str2 = string.toLowerCase()
  console.log(str2)
}
function sayHiToGrandma(string){
  var lc = string.toLowerCase()
  var hc = string.toUpperCase()
  if (string === lc) {
    return "I can't hear you!"
  }
  else if (string === hc) {
    return "YES INDEED!"
  }
  else if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
}
