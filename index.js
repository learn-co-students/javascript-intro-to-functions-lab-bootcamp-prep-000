function shout(string){
  return string.toUpperCase() 
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  var uppercase = string.toUpperCase()
  console.log(uppercase)
}
  
function logWhisper(string){
  var lowercase = string.toLowerCase()
  console.log(lowercase)
}  

function sayHiToGrandma(string){
  var lowercase = "hello"
  var uppercase = "HELLO"
  var phrase = "I love you, Grandma."
  
  if(string === lowercase.toLowerCase()){
    return "I can't hear you!"
  }
  if(string === uppercase.toUpperCase()){
    return "YES INDEED!"
    } 
  if(string === phrase){
      return "I love you, too."
    }
}
