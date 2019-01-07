var lower = "hello"
var upper = "HELLO"
var string

function shout(lower){
  return lower.toUpperCase()
}

function whisper(upper){
  return upper.toLowerCase()
}

function logShout(lower){
  var lowup = lower.toUpperCase()
  console.log(lowup)
}

function logWhisper(upper){
  var uplow = upper.toLowerCase()
  console.log(uplow)
}

function sayHiToGrandma(string){
  if (string === "HELLO"){
    return ("YES INDEED!")
  }
  if (string === "hello"){
    return ("I can\'t hear you!")
  }
  if (string === "I love you, Grandma."){
    return ("I love you, too.")
  }
}
