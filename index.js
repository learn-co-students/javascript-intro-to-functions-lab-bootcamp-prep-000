function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}
function logWhisper(string){
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  var upper = string
  var lower = string
  var love = "I love you, Grandma"
  console.log(upper)
  
  if ( lower.toUpperCase() === lower ) {
    return "I can't hear you!";
  }
  if (upper.toUpperCase() === upper) {
    return "YES INDEED!";
  }
  if (upper === love) {
    return "I love you, too.";
  }

}
