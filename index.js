function shout(string) {
  return string.toUpperCase()
}

shout("Hello!")

function whisper(string) {
  return string.toLowerCase()
}

whisper("Hello!")

function logShout(string) {
  console.log(string.toUpperCase())
}

logShout("hello!")

function logWhisper(string) {
  console.log(string.toLowerCase())
}

logWhisper("HELLO!")

function sayHighToGrandma(string) {
  var cantHear = "I can't hear you!"
  var answerYes = "YES INDEED!"
  var answerLove = "I love you, too"
  if (string.toLowerCase(string) === string) {
    return cantHear;
  }
  else if (string.toUpperCase(string) === string) {
    return answerYes;
  }
  else if ("I love you, Grandma." === string) {
    return answerLove
  }
  