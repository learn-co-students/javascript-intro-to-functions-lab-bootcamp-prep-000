function shout(hello) {
  return 'hello'.toUpperCase()
}

function whisper(HELLO) {
  return 'HELLO'.toLowerCase()
}

function logShout(hello) {
  console.log('hello'.toUpperCase());
}

function logWhisper(HELLO) {
  console.log('HELLO'.toLowerCase());
}

function sayHiToGrandma(string) {
  if (string === 'Hello'.toLowerCase()) {
    return "I can't hear you!"
  } else if  (string === 'Hello'.toUpperCase()) {
    return 'YES INDEED!'
  } else if (string === 'I love you, Grandma.') {
    return 'I love you, too.'
  }
}
