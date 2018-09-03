function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}

function logShout (greeting) {
   console.log(greeting.toUpperCase())
}
logShout('hi')

function logWhisper (greeting){
  console.log(greeting.toLowerCase())
}
logWhisper ('HELLO')

function sayHiToGrandma (string){
  if (string === string.toLowerCase()) {
    return "I can't hear you!"
    
  }
  else if (string ===string.toUpperCase()){
    return "YES INDEED!"
  }
  else if (string === 'I love you, Grandma.')
  return "I love you, too."
  }
sayHiToGrandma ('HI')
sayHiToGrandma ('I love you, Grandma.')
