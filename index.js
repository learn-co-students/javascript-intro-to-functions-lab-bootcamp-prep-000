function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  return console.log(shout(string))
}

function logWhisper(string) {
  return console.log(whisper(string))
}

function sayHiToGrandma(string) {
  switch(string){
    case string.toLowerCase() :
      return "I can't hear you!"
      break;
    case string.toUpperCase() :
      return "YES INDEED!"
      break;
    case "I love you, Grandma." :
      return "I love you, too."
      break;
    default : 
      return null
  }
}