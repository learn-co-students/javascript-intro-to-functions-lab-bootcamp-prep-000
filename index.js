function shout(string) {
  return 'Hello'.toUpperCase();
}

function whisper(string) {
  return 'Hello'.toLowerCase();
}

function logShout(string){
  console.log("HELLO");
}

function logWhisper(string){
  console.log("hello");
}

function sayHiToGrandma(string){
  if (string.toLowerCase() === string){
    return "I can\'t hear you!";
  } else if (string.toUpperCase() === string){
    return "YES INDEED!";
  } else (string === "I love you, Grandma.");{
    return "I love you, too.";
  }
}