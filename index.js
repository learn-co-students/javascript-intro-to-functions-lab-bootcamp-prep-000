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
  var uppercase = "HELLO!"
  var lowercase = 'hello!'
  var mixedCase = 'Hi there!'
  var quiet = "I can't hear you!"
  var loud = "YES INDEED!"
  var love = "I love you, Grandma"
  var back = "I love you, too"
  
  if(uppercase.toUpperCase() === uppercase) // true
  {
    return loud 
  }

  else if(lowercase.toLowerCase === lowercase) // true
  {
    return quiet
  }
 
  if(love = string) // false
  {
    return back
  }


 

 
mixedCase.toUpperCase() === mixedCase // false
}