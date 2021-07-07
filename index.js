function shout(shoutString) {
  return shoutString.toUpperCase();
}

function whisper(whisperString) {
  return whisperString.toLowerCase()
}

function logShout(logShoutString) {
  console.log(logShoutString.toUpperCase())
}

function logWhisper(logWhisperString) {
  console.log(logWhisperString.toLowerCase())
}

function sayHiToGrandma(sayHiToGrandmaString) {
  if (sayHiToGrandmaString.toLowerCase() === sayHiToGrandmaString) {
    return "I can't hear you!"    
  } else if (sayHiToGrandmaString.toUpperCase() === sayHiToGrandmaString) {
      return "YES INDEED!"
  } else if (sayHiToGrandmaString === "I love you, Grandma.") {
      return "I love you, too."
  }
}