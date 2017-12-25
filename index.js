function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  string= string.toUpperCase()
  console.log(string)
}

function logWhisper(string) {
 string= string.toLowerCase()
  console.log(string)
}

function sayHiToGrandma(string) {
  if (string==="I love you, Grandma."){
    return "I love you, too."
  }
  else if (string.toLowerCase()===string){
    return "I can\'t hear you!"
  }
  else return "YES INDEED!"
}

