function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase()
  )
}

function logWhisper(string) {
  console.log(string.toLowerCase() 
  )
}

function sayHiToGrandma(string) {
  var string2 = "I love you, Grandma."
  var reply = "I can't hear you!"
  var reply2 = "YES INDEED!"
  var reply3 = "I love you, too."
  if (string === string.toLowerCase() ) {
    return reply
  }
  else if (string === string.toUpperCase() ) {
    return reply2
  }
  else if (string === string2) {
    return reply3
  }
}

