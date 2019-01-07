function shout(string) {
  return string.toUpperCase() //'HELLO!'
}

function whisper(string) {
  return string.toLowerCase() // 'hello!'
}

function logShout(string) {
  console.log('HELLO')
}

function logWhisper(string) {
  console.log('hello')
}

function sayHiToGrandma(string) {
switch(string) {
  case 'hello':
    return 'I can\'t hear you!'
  case 'HELLO':
    return 'YES INDEED!'
  case 'I love you, Grandma.':
    return 'I love you, too.';
}
}
