var uppercase = 'HELLO!'
var lowercase = 'hello!'
var mixedcase = 'Hi there!'

function shout(lowercase) {
  return lowercase.toUpperCase()
}

function whisper(uppercase){
  return uppercase.toLowerCase()
}

function logShout(lowercase){
  console.log(lowercase.toUpperCase())
}

function logWhisper(uppercase){
  console.log(uppercase.toLowerCase())
}

function sayHiToGrandma(lowercase){
  if (lowercase.toLowerCase() === lowercase){
    return "I can't hear you!"
  }else if (lowercase.toUpperCase() === uppercase) {
    return "YES INDEED!"
  }else if (lowercase === "I love you, Grandma.") {
    return "I love you, too."
  }
}
