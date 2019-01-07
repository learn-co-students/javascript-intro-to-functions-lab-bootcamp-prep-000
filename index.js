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

function sayHiToGrandma(string){
  var lowercase = string.toLowerCase();
  if (lowercase === string) {
    return "I can't hear you!"
  }
  var uppercase = string.toUpperCase();
  if (uppercase === string){
    return "YES INDEED!"
  }
  var correct = "I love you, Grandma.";
  if (string === correct){
    return 'I love you, too.'
  }

}
