//shout()
function shout(word){
  return word.toUpperCase()
}

//whisper()
function whisper(word){
  return word.toLowerCase()
}

//logShout(string)
function logShout(word){
  console.log(word.toUpperCase())
}

//logWhisper(string)
function logWhisper(word){
  console.log(word.toLowerCase())
}

//sayHiToGrandma(string)
function sayHiToGrandma(greeting){
  if (greeting.toLowerCase() === greeting){
    return "I can\'t hear you!";
  }
  else if (greeting.toUpperCase() === greeting){
    return "YES INDEED!";
  }
  else if (greeting === "I love you, Grandma."){
    return "I love you, too."
  }
}