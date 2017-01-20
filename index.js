function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  var str
  str = string.toLowerCase() === string ? "I can\'t hear you!" :
    (
      string.toUpperCase() === string ? "YES INDEED!" :
       (
         string === "I love you, Grandma." ? "I love you, too." : ""
       )
     )
  return str
}
