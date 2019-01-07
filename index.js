function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase ()
}

function logShout(string) {
  console.log (string.toUpperCase ())
}

function logWhisper(string) {
  console.log (string.toLowerCase ())
}

function sayHiToGrandma(string) {
  var uppercase = "HELLO!"
    uppercase.toUpperCase() === uppercase // true
  var lowercase = 'hello!'
    lowercase.toLowerCase() === lowercase // true
  var mixedCase = 'Hi there!'
    mixedCase.toLowerCase() === mixedCase // false
    mixedCase.toUpperCase() === mixedCase // false
  switch (string) {
    case string.toUpperCase():
      return "YES INDEED!";
      break;
    case string.toLowerCase():
      return "I can\'t hear you!";
      break;
    case string = "I love you, Grandma.":
      return "I love you, too.";
      break;
  }
}
