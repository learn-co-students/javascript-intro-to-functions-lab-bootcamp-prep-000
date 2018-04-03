function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  var capital = string.toUpperCase()
  console.log(capital)
}

function logWhisper(string){
  var little = string.toLowerCase()
  console.log(little)
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
var response = "I can\'t hear you!";
  }
  else if (string === string.toUpperCase()) {
  response = "YES INDEED!";
  }
   else if (string === "I love you, Grandma.") {
  response = "I love you, too.";
  }
  else {}
  return response
}