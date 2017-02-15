function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}


function logShout(string) {
  console.log('HELLO')
}

function logWhisper(string) {
  console.log('hello')
}

function sayHiToGrandma(string) { // string == 'hello'
  if (whisper(string) == string){ // 'hello' == 'hello'
      return 'I can\'t hear you!'
  } else if (shout(string) == string) { // 'hello' == 'HELLO'
      return "YES INDEED!"
  } else if (string == "I love you, Grandma.") {
      return "I love you, too."
  }
}
