function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log('Hello'.toUpperCase())
}

function logWhisper(string) {
  console.log('Hello'.toLowerCase())
}

function sayHiToGrandma(string) {
  var lowercase = 'hello'
  var uppercase = 'HELLO'
  var loveyou = 'I love you, Grandma.'
  
  if(string === lowercase) {
    return "I can\'t hear you!"
  }
  else if (string === uppercase) {
    return "YES INDEED!"
  }
  else if (string === loveyou) {
    return "I love you, too."
  }
}