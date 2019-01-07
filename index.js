function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(shout(string))
}

function logWhisper(string){
  console.log(whisper(string))
}

var uppercase = "HELLO!"

uppercase.toUpperCase() === uppercase // true

var lowercase = 'hello!'

lowercase.toLowerCase() === lowercase // true

var mixedCase = 'Hi there!'

mixedCase.toLowerCase() === mixedCase // false

mixedCase.toUpperCase() === mixedCase // false

var string = 'I love you, '

function sayHiToGrandma(string){
  if (string.toLowerCase() === string) {
    return ("I can\'t hear you!");
  } else if (string.toUpperCase() === string) {
    return ("YES INDEED!");
  } else if (string === "I love you, Grandma"); {
    return ("I love you, too.");
  }
  }
