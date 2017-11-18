function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
// return string.toUpperCase()
}

function logWhisper(string) {
  console.log(string.toLowerCase())
// return string.toUpperCase()
}


function sayHiToGrandma(string) {
  var lowercase =  'hello'
  var uppercase =  'HELLO'
  var iloveyou  =  'I love you, Grandma.'

 if (string == lowercase)
  {
     string = "I can\'t hear you!"
     return string
  }  else if (string == uppercase)
  {
     string = "YES INDEED!"
     return string
  }   else if (string == iloveyou)
  {
    string = "I love you, too."
    return string
  }  else {}
}
