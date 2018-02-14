let shout = function(string) {
  return string.toUpperCase()
}
shout('hello')

let whisper = function(string) {
  return string.toLowerCase()
}
whisper('HELLO')

let logShout = function(string) {
  console.log(string.toUpperCase())
}
logShout('hello')

let logWhisper = function(string) {
  console.log(string.toLowerCase())
}
logWhisper('HELLO')


var lowercase = 'hello!'
var uppercase = "HELLO!"
var mixedCase = 'Hi there!'


let sayHiToGrandma = function(string) {
  if(string.toLowerCase() === string) {
    return "I can\'t hear you!"
  } else if (string.toUpperCase() === string) {
    return 'YES INDEED!'
  }else if(string === "I love you, Grandma.") {
    return  "I love you, too."
  } else {
    return null
  }
}

sayHiToGrandma('hello')
sayHiToGrandma('HELLO')
sayHiToGrandma("I love you, Grandma")
