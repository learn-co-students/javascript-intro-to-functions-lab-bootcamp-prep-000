function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log(string.toUpperCase());
}

function logWhisper(string){
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string){
  var response = "response";

  if (string.toLowerCase() === string) {
    response = "I can't hear you!";
    return response;
  }

  if (string.toUpperCase() === string) {
    response = "YES INDEED!";
    return response;
  }

  if (string === "I love you, Grandma.") {
    response = "I love you, too.";
    return response;
  }
}
