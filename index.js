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

/*this doesn't work, but I want to move on */
function sayHiToGrandma(string) {

var louder  = "I can\'t hear you!"
var totally = "YES INDEED!"
var love    = "I love you, too!"

  if (console.log("hello") === console.log(string))
     {console.log(`${louder}`)} 
     /*return "I can\'t hear you!"} */
    
  else if (console.log("HELLO") === console.log(string))
      {console.log(`${totally}`)}   
      /*return "YES INDEED!"} */
      
  else if (console.log("I love you, grandma.") === console.log(string))
      {console.log(`${love}`)}  
}
      /*return "I love you, too."} */