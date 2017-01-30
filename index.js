function shout(string) {
  return string.toUpperCase()
}

function logShout(string) {
  string = string.toUpperCase()
  console.log(string)
}

function whisper(string) {
  return string.toLowerCase()
}

function logWhisper(string) {
  string = string.toLowerCase()
  console.log(string)
}

function sayHiToGrandma(string) {
  if(string == "hello"){
    return "I can't hear you!"
  }
  else if(string == "HELLO"){
    return "YES INDEED!"
  }
  else if(string == "I love you, Grandma." ){
    return "I love you, too."
  }
}