function shout(string){
  return string.toUpperCase()
}

function whipser(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(shout);
}

function logWhipster(string){
  console.log(whisper);
}

function sayHiToGrandMa(string){
  if (string) {
    return string.whisper()
  }
}
