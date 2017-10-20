var uppercase = "HELLO!"
uppercase.toUpperCase() === uppercase

var lowercase = 'hello!'
lowercase.toLowerCase() === lowercase


function shout(string) {
  return string.toUpperCase();
}
shout('hello')

function logShout(string) {
  console.log(string.toUpperCase());
}

function whisper(string) {
  return string.toLowerCase();
}
whisper('hello')

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  if (string === lowercase) {
    return 'I can\'\ t hear you!'
  }
  else if (string === uppercase) {
    return 'YES INDEED!'
  }
  else if (string === 'I love you, Grandma') {
    return 'I love you, too'
  }
  else {
    return 'What?'
  }
}
