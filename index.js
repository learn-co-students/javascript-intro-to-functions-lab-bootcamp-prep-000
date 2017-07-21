function shout(sth){
  return sth.toUpperCase()
}

function whisper(sth){
  return sth.toLowerCase()
}

function logShout(sth){
  console.log(`${sth.toUpperCase()}`)
}

function logWhisper(sth){
  console.log(`${sth.toLowerCase()}`)
}

function sayHiToGrandma(sth){
  if(sth.toLowerCase()===sth) return "I can't hear you!"
  else if(sth.toUpperCase()===sth) return "YES INDEED!"
  else if(sth==="I love you, Grandma.") return "I love you, too."
}
