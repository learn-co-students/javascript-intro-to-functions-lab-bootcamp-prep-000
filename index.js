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
  if (string.toLowerCase() == string){ // 'hello' == 'hello'
      return 'I can\'t hear you!'
  } else if (string.toUpperCase() == string) { // 'hello' == 'HELLO'
      return "YES INDEED!"
  } else if (string == "I love you, Grandma.") {
      return "I love you, too."
  }
}

function sayHiToGrandma(string) {
  var lowercase=
  string.toLowerCase
  return "I can't hear you!";

  var uppecase=
  string.toUpperCase
  return "YES INDEED!";

  string = "I love you, Grandma."
  return "I love you, too."
}
