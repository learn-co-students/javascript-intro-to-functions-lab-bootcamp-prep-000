function shout(string1){
  return string1.toUpperCase()
}

function whisper(string1){
  return string1.toLowerCase()
}

function logShout(string1){
  console.log(string1.toUpperCase())
}

function logWhisper(string1){
  console.log(string1.toLowerCase())
}

function sayHiToGrandma(string1){
  if (string1.toLowerCase()===string1){
    return "I can't hear you!"
  }else if (string1.toUpperCase()===string1){
    return "YES INDEED!"
  }else if (string1 === "I love you, Grandma."){
    return "I love you, too."
  }
}
