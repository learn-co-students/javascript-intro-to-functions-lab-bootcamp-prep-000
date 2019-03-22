var uppercase = "HELLO!"
var lowercase = 'hello!'
var mixedCase = 'Hi there!'

function shout(string) {
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}


function sayHiToGrandma(string){
  if(string === string.toLowerCase()){
    return "I can't hear you!"
  }
  if(string === string.toUpperCase()){
    return "YES INDEED!"
  }
  
  var youToo = "I love you, Grandma."
  if (string === youToo){
    return "I love you, too."
  }
}

function logShout(string){
  console.log(shout(string));
}

function logWhisper(string){
  console.log(whisper(string));
}

logShout(uppercase)
logWhisper(lowercase)