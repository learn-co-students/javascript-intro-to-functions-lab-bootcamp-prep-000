function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string){
  console.log(string.toUpperCase())
  }

  function logWhisper(string){
    console.log(string.toLowerCase())
    
  }

  var uppercase = 'HELLO' 
  uppercase.toUpperCase() === uppercase // true
  var lowercase = 'hello'
   lowercase.toLowerCase() === lowercase // true  
   var mixedCase = "I love you, Grandma."
   mixedCase.toLowerCase() === mixedCase // false
   mixedCase.toUpperCase() === mixedCase // false

function sayHiToGrandma(string){
  switch(string){
case lowercase:
  return "I can\'t hear you!"
case uppercase:
  return "YES INDEED!"
case mixedCase:
  return "I love you, too."
}
}