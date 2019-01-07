function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log('HELLO')
}

function logWhisper(string){
  console.log('hello')
}


function sayHiToGrandma(string){
  if(string==='hello'.toLowerCase()) return("I can't hear you!")
  if(string==='HELLO'.toUpperCase()) return("YES INDEED!")
  if ('I love you, Grandma') return("I love you, too.")
}
