//1
function shout(string) {
  return string.toUpperCase()
}

//2
function logShout(string) {
  console.log(string.toUpperCase())
}

//3
function whisper(string) {
  return(string.toLowerCase())
}

//4
function logWhisper(string) {
  console.log(string.toLowerCase())
}

//Grandma
function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
  return("I can't hear you!")
}else if(string.toUpperCase() === string) {
  return("YES INDEED!")
}else if(string === "I love you, Grandma.") {
  return("I love you, too.")
}
else {
  }
}
