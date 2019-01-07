function shout(string){

  return string.toUpperCase()
}

function whisper(string){

  return string.toLowerCase()
}

function logShout(string){

var string2 = string.toUpperCase()

console.log(string2)

}

function logWhisper(string){

var string2 = string.toLowerCase()

console.log(string2)

}

function sayHiToGrandma(string){
var string2 = string
var string3 = "I can't hear you!"
var string4 = "YES INDEED!"
var string5 = "I love you, too."
  if(string2 === string.toLowerCase()){

     return string3

  }
  if(string2 === string.toUpperCase()){

    return string4
  }
  if(string === "I love you, Grandma."){
    return string5
  }
}
