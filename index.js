function shout(string) {
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
var stringUppercase
  console.log(string.toUpperCase())

}

function logWhisper(string){
    var stringLowercase = string
    
//  stringLowercase = stringLowercase.toLowerCase()
  console.log(stringLowercase.toLowerCase())
  
}

function sayHiToGrandma(string){
    var message = string
    if (message === message.toLowerCase()){
      return "I can't hear you!"
    }else if (message === message.toUpperCase()) {
      return "YES INDEED!"
    }else if (message === "I love you, Grandma.") {
      return "I love you, too."
    }else{
      // Do nothing
    }
}