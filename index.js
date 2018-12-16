function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string){
  console.log('HELLO')
  return ('hello')
}

function logWhisper(string){
  console.log('hello')
  return ('HELLO')
}

function sayHiToGrandma(string){
  var lowercase = 'hello'
  var uppercase = 'HELLO'
  var mixedCase = 'I love you, Grandma.'
  
  if (string === lowercase){
    console.log('hello')
    return ("I can't hear you!")
  }
  
  else {
    string.toUpperCase()
    if (string === uppercase){
    console.log('HELLO')
    return ('YES INDEED!')
    }
    else{
    console.log('I love you, Grandma.')
    return ('I love you, too.')
    }
  }
}