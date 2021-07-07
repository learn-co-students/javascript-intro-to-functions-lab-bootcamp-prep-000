var shout = function(uppercase) {
  return uppercase.toUpperCase();
}

var whisper = function(lowercase) {
  return lowercase.toLowerCase();
}

function logShout(string) {
  console.log(shout(string));
}

function logWhisper(string) {
  console.log(whisper(string));
}

function sayHiToGrandma(string){

  if (string === "hello") {
    return('I can\'t hear you!');
  }

  else if (string === "HELLO"){
    return("YES INDEED!");
  }

  else if (string === "I love you, Grandma.") {
    return ("I love you, too.");
  }
}
