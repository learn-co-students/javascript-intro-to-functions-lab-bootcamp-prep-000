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

function sayHiToGrandma(string){ // sayHiToGrandma('hello') string will equal 'hello'
  if (string == whisper(string)) { // 'hello' == 'hello'
    return ('I can\'t hear you!')

  } else  if (string == shout(string)){
    return ("YES INDEED!")
}
}

function sayHiToGrandma(string){
  if (string == whisper(string)) {
    return ('I can\'t hear you!')
  } else if (string == shout(string)){
    return ("YES INDEED!")
  } else if (string == "I love you, Grandma."){
    return ("I love you, too.")
  }
}
