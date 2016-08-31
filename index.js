function shout(string) {
  return string.toUpperCase()
}

function whisper(str){
  return str.toLowerCase()
}

function logShout(str){
  var yell = str.toUpperCase()
  console.log(yell)
}

function logWhisper(str){
  var quiet = str.toLowerCase();
  console.log(quiet);
}

function sayHiToGrandma(str){
  if (str == "I love you, Grandma."){
    return "I love you, too."
  }
  else if (str == str.toUpperCase()) {
    return "YES INDEED!"
  }
  else {return "I can't hear you!"}
}
