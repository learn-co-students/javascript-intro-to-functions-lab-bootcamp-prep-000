function shout(hello) {
  return 'hello'.toUpperCase()
}

function whisper(hello) {
  return 'HELLO'.toLowerCase()
}

function logShout(hello) {
  console.log('hello'.toUpperCase())
}

function logWhisper(hello) {
  console.log('HELLO'.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return "I can\'t hear you!";
  } else if (string.toUpperCase() === string) {
    return "YES INDEED!";
  } else if (string === "I love you, Grandma.") {
    return "I love you, too.";
  }
}
