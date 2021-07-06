function shout(hello) {
  return "HELLO"
}

function whisper(HELLO){
  return 'hello'
}

function logShout(hello){
  console.log('hello'.toUpperCase())
}

function logWhisper(HELLO){
  console.log('HELLO'.toLowerCase())
}

function sayHiToGrandma(hello){
  if (hello === 'hello'){
    return 'I can\'t hear you!'
  } else if (hello === 'HELLO') {
    return 'YES INDEED!'
  } else if (hello === 'I love you, Grandma.'){
    return 'I love you, too.'
  }
}
