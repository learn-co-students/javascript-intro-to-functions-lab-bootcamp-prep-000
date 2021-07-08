function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
  //console.log(`${string}`.toLowerCase())
}

function logShout(string) {
  //return string
  console.log(`${string}`.toUpperCase())
}

function logWhisper(string) {
  //return string
  console.log(`${string}`.toLowerCase())
}

function sayHiToGrandma(string) {
    if (string == string.toLowerCase()){
      return "I can\'t hear you!";
    } else if (string == string.toUpperCase()){
      return "YES INDEED!";
    } else return "I love you, too."
  }
