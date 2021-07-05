function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}


function logShout(string) {
  console.log(string.toUpperCase())
}
logShout('hello')

function logWhisper(string) {
  console.log(string.toLowerCase())
}
logWhisper('HELLO')


function sayHiToGrandma(string) {
  var whisper = 'hello'
  var shout = 'HELLO'
  
  if (string === whisper) {
    return "I can't hear you!"
  
  } else if (string === shout) {
    return "YES INDEED!"
  
  } else {
    return "I love you, too."
  }
  
}
 
 
sayHiToGrandma('hello')
sayHiToGrandma('HELLO')
sayHiToGrandma('I love you, Grandma.')

 