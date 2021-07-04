function shout (radish) {
  return radish.toUpperCase()
}

function whisper (whisper) {
  return whisper.toLowerCase()
}

function logShout (radish) {
  console.log(radish.toUpperCase())
}
function logWhisper(whisper) {
  console.log(whisper.toLowerCase())
}

function sayHiToGrandma(hello){
  if(hello===hello.toLowerCase()) {
    return "I can't hear you!"
  } else if (hello===hello.toUpperCase()) {
    return "YES INDEED!"
  } else if (hello==="I love you, Grandma.") {
    return "I love you, too."
  }
}
