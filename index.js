function shout(arg1) {
  return arg1.toUpperCase()
}

function whisper(arg2) {
  return arg2.toLowerCase()
}

function logShout(arg3) {
  console.log(arg3.toUpperCase())
}

function logWhisper(arg4) {
  console.log (arg4.toLowerCase())
}

function sayHiToGrandma(arg5) {
  let lowercase = arg5.toLowerCase()
  let uppercase = arg5.toUpperCase()
  let mixedcase = arg5
  
  if (arg5 === lowercase){
    return "I can't hear you!"
  }
  else if (arg5 === uppercase){
    return "YES INDEED!"
  }
  else if (arg5 === mixedcase){
    return "I love you, too."
  }
}