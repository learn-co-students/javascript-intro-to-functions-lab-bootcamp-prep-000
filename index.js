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
