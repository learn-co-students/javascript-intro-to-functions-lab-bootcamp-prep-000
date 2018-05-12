function shout(string){
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}

function logShout(a){
  console.log(shout(a));
}

function logWhisper(b){
  console.log(whisper(b));
}

function sayHiToGrandma(string) {
  if (string.toUpperCase() === string) {
    return `YES INDEED!`
  }
  else if (string.toLowerCase() === string) {
    return `I can't hear you!`
  }
  else if (string === "I love you, Grandma.") {
    return `I love you, too.`
  }
}
