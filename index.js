function shout(string){
  return string.toUpperCase()
}

console.log(shout('hello'),whisper('HELLO'),sayHiToGrandma('hello'),sayHiToGrandma('HELLO'),sayHiToGrandma('I love you, Grandma.'))

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  if (string === string.toLowerCase()){
    return "I can't hear you!"
  }
  else if (string === string.toUpperCase()){
    return "YES INDEED!"
  }
  else if (string === "I love you, Grandma."){
    return "I love you, too."
  }
}

logShout('shout'),logWhisper('SHOUT')