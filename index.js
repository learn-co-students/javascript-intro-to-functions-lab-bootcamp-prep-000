function shout(string){
  return string.toUpperCase()
}

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
  // if lowercase say "I can't hear you!"
  if (string.toLowerCase() === string){
    return "I can't hear you!"
  // if uppercase, return "YES INDEED!"  
  }else if (string.toUpperCase() === string){
    return "YES INDEED!"
  // else print "I love you, too"
  }else {
    return 'I love you, too.'
  }
}