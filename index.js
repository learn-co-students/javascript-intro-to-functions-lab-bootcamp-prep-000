function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string){
  const spy = string.toUpperCase()
  console.log(spy)
}

function logWhisper(string) {
  const spy = string.toLowerCase()
  console.log(spy)
}

function sayHiToGrandma(string){
  if(string.toLowerCase() === string){
    return "I can't hear you!"
  } else if (string.toUpperCase() === string) {
    return "YES INDEED!"
  } else {
    return "I love you, too."
  }
}
