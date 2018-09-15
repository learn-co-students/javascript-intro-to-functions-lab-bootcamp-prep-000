function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(spy) {
  console.log(spy.toUpperCase())
}

function logWhisper(spy) {
  console.log(spy.toLowerCase())
}

function sayHiToGrandma(string) { 
var lowerCase = string.toLowerCase; 
var upperCase = string.toUpperCase; 
if(string.toLowerCase === lowerCase) { 
  return("I can\'t hear you!") 
} else if(string.toUpperCase === upperCase) { 
  return("YES INDEED!")
  } else if (string === "I love you, grandma"){ 
    return("I love you, too.") 
  } 
}