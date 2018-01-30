var greet = "Hi GRANDMA"

function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}

function sayHiToGrandma(greet){

  if (greet.toUpperCase === greet) {
    console.log("YES INDEED!");
  }

  if (greet.toLowerCase === greet) {
    console.log("I can\'t hear you!");
  }

  else {
    console.log("I love you, too");
  }
}

sayHiToGrandma()
