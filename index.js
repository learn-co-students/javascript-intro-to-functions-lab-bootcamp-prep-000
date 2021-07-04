function shout(word){
  return word.toUpperCase()
}

function whisper(word){
  return word.toLowerCase()
}

function logShout(word){
  console.log(word.toUpperCase())
}

function logWhisper(word){
  console.log(word.toLowerCase())
}
function sayHiToGrandma(string){
  var uCase = string.toUpperCase();
  var lCase = string.toLowerCase();
  var love = "I love you, Grandma.";
  if (string === uCase){
    return "YES INDEED!";
  } else if (string === lCase){
    return "I can't hear you!";
  } else if (string === love){
    return "I love you, too.";
  } else {
    return "WHAT?"
  }
}
