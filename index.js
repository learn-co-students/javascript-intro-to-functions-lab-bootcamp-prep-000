function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  var spy = string.toUpperCase()
  console.log(spy)
  }

function logWhisper(string) {
  var spy = string.toLowerCase()
  console.log(spy)
  }
  
  var uppercase = "HELLO"
  var lowercase = "hello"
  
  function sayHiToGrandma(string) {
    if (string === lowercase) {
      return `I can't hear you!`;
      } else if (string === uppercase) {
      return `YES INDEED!`;
      } else if (string === "I love you, Grandma.") {
        return `I love you, too.`;
    }
  }