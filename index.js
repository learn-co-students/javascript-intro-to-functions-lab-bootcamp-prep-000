function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
var lowercase = 'hello';
var uppercase = 'HELLO';
  switch(string) {
    case lowercase:
      if (string.toLowerCase() === lowercase) {
        return "I can't hear you!";
      }
        break;
    case uppercase:
      if (string.toUpperCase() === uppercase) {
        return "YES INDEED!";
      }
        break;
    default:
      return "I love you, too.";
  }
}
