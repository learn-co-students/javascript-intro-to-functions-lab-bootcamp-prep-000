function shout(string){
  return string.toUpperCase()

}

function logShout(text){
  console.log(text.toUpperCase())
}

function whisper(text){
  return text.toLowerCase()
}

function logWhisper(text){
  console.log(text.toLowerCase())
}

function sayHiToGrandma(text){
  if (text === text.toLowerCase()) {
    return "I can't hear you!"
  } else if (text === text.toUpperCase()) {
    return "YES INDEED!"
  } else if (text === "I love you, Grandma.") {
    return "I love you, too."
  }   
}  
  
  //if it is text == lowercase "I can't hear you"
    //else if text== uppercase "YES INDEED"
  // else if text== I love you, Grandma "I love you, too"  }

//if it is text== uppercase "YES INDEED!"

