function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}


function logShout(string){
  console.log(string.toUpperCase())
}

logShout('i made it')

function logWhisper(string){
  console.log(string.toLowerCase())
}

logWhisper('YEAH!')


function sayHiToGrandma(string) {
  if (string === string.toLowerCase()){
    return "I can't hear you!";
  }
  else if (string === string.toUpperCase()){
    return "YES INDEED!"
  }
  else if (string === "I love you, Grandma."){
    return "I love you, too."
  }
}

console.log(sayHiToGrandma("grandma"))
console.log(sayHiToGrandma("ARE YOU IN THE HEAVEN?"))
console.log(sayHiToGrandma("I love you, Grandma."))
