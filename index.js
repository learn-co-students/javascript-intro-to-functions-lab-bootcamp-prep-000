function shout(string)  {
  return string.toUpperCase() //hello! -> HELLO!
}

function whisper(string)  {
  return string.toLowerCase() //Hello! -> hello!
}

function logShout(string) {
  console.log(string.toUpperCase()) //doesn't return actual "value"
}

function logWhisper(string) {
  console.log(string.toLowerCase()) //doesn't return a "value"
}

function sayHiToGrandma(string) {
  if (string === 'HELLO') {
    return "YES INDEED!"
  }
  else if (string === 'hello') {
    return "I can't hear you!"
  }
  else if (string === 'I love you, Grandma.') {
    return "I love you, too."
  }
}