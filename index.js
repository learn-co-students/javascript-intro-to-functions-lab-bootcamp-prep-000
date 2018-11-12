//var uppercase = 'HELLO!'
//var lowercase = "hello!"

function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string){
  var string = string.toUpperCase()
  console.log(string)
}

function logWhisper(string){
  var string = string.toLowerCase()
  console.log(string)
}

function sayHiToGrandma(string) {
  if (string === "I love you, Grandma.") {
    return "I love you, too."
  } else if (string === string.toLowerCase()) {
      return "I can't hear you!"
    } else if (string === string.toUpperCase()) {
        return "YES INDEED!"
      }
  }
