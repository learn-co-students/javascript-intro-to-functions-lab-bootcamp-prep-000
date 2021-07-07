

function shout(s) {
  return s.toUpperCase()
}

function whisper(s) {
  return s.toLowerCase()
}

function logShout(s) {
  console.log(s.toUpperCase())
}

function logWhisper(s) {
  console.log(s.toLowerCase())
}

function sayHiToGrandma(s) {
  var s1 = "HELLO"
  var s2 = "hello"
  var s3 = "I love you, Grandma."
  
  if(s === s1) {
    return "YES INDEED!"
  }
  else if(s === s2) {
    return "I can't hear you!"
  }
  else if(s === s3) {
    return "I love you, too."
  }
  else {
    return "What, I can't hear you!!"
  }
}