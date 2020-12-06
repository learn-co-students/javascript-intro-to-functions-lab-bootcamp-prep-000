function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  var uppercase = "HELLO!"
  uppercase.toUpperCase() === uppercase
  if(string.toUpperCase() === string){
    return "YES INDEED!"
  }
  var lowercase = "hello!"
  lowercase.toLowerCase() === lowercase
  if (string.toLowerCase() === string){
    return "I can\'t hear you!"
  }

  var mixedCase = "Hi there!"
  mixedCase.toUpperCase() === mixedCase
  mixedCase.toLowerCase() === mixedCase
  if (string === 'I love you, Grandma.'){
    return "I love you, too."
  }
}
