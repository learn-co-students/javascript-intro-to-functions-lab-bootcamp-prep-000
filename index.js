function shout(string){
  return string.toUpperCase()

}

console.log(shout("shout") + " check")


function whisper(string){
  return string.toLowerCase()

}

console.log(whisper("whisper") + " check")


function logShout(string){
  console.log(string.toUpperCase())
}

logShout("please shout")

function logWhisper(string){
  console.log(string.toLowerCase())
}

logWhisper("PLEASE whisPER")


function sayHiToGrandma(string){
  if (string === string.toLowerCase()){
    return "I can\'t hear you!"
  }
  if (string === string.toUpperCase()) {
    return "YES INDEED!"
  }
  if(string === "I love you, Grandma."){
    return "I love you, too."
  }

}

console.log("hello")
console.log(sayHiToGrandma("hello"))

console.log("HI GRANDMA!")
console.log(sayHiToGrandma("HI GRANDMA!"))

console.log("I love you, Grandma.")
console.log(sayHiToGrandma("I love you, Grandma."))
