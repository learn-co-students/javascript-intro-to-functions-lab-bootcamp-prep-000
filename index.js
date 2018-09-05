function shout(arg1) {
  return arg1.toUpperCase()
}

function whisper(arg1) {
  return arg1.toLowerCase()
}

function logShout(arg1) {
  console.log(arg1.toUpperCase())
  return 0
}

function logWhisper(arg1) {
  console.log(arg1.toLowerCase())
}

function sayHiToGrandma(arg1) {
  if(arg1==='hello') return "I can't hear you!"
  else if (arg1==='HELLO') return "YES INDEED!"
  else if (arg1==='I love you, Grandma.') return"I love you, too."
}