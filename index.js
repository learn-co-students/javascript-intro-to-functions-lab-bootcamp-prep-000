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
  if(string.localeCompare(whisper(string)) === 0)
    return "I can't hear you!"
  else if (string.localeCompare(shout(string)) === 0)
    return "YES INDEED!"
  else if (string.localeCompare("I love you, Grandma.") === 0)
    return "I love you, too."
}