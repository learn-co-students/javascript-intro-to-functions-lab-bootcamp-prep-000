function shout(string) {
  return string.toUpperCase()
}

function logShout(hello){
  console.log(hello.toUpperCase())
}

function whisper(string) {
  return string.toLowerCase()
}

function logWhisper(hello){
  console.log(hello.toLowerCase())
}

function sayHiToGrandma(string){
  if(string == "I love you, Grandma."){
  return 'I love you, too.'
  } else if (string == string.toUpperCase()){
    return 'YES INDEED!'
  } else{
  return 'I can\'t hear you!'
  }
}
