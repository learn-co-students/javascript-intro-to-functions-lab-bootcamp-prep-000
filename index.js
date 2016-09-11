function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(hello){
  console.log('hello'.toUpperCase())
}

function logWhisper(hello){
  console.log('hello'.toLowerCase())
}

function sayHiToGrandma(string){
  if (string.toLowerCase() === string) {
    return "I can't hear you!"
  } else if (string.toUpperCase() === string){
    return "YES INDEED!"
  } else if ("I love you, Grandma." === string){
    return "I love you, too."
  }
}
