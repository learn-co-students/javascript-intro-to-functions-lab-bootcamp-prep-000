function shout(hello){
  return hello.toUpperCase()
}

function whisper(hello){
  return hello.toLowerCase()
}

function logShout(hello) {
  console.log(hello.toUpperCase())
}

function logWhisper(hello) {
  console.log(hello.toLowerCase())
}


function sayHiToGrandma(hello) {
  if (hello.toLowerCase() === hello) {
    return 'I can\'t hear you!'
  } else if (hello.toUpperCase() === hello) {
    return 'YES INDEED!'
  }   else (hello === 'I love you, Grandma')
     return "I love you, too."
  }
