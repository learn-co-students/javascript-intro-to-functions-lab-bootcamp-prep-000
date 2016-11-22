function shout(string){

  return string.toUpperCase()

}

function whisper(word){

  return word.toLowerCase()

}

function logShout(shout){
  var shout = "HELLO";
  shout.toLowerCase();
  console.log(shout);

}

function logWhisper(whisper){
  var whisper = "hello";
  whisper.toLowerCase();
  console.log(whisper);
}

function sayHiToGrandma(string) {

switch(string){

  case "hello":
    return "I can't hear you!"

  case "HELLO":
    return "YES INDEED!"

  case "I love you, Grandma.":
    return "I love you, too."
}

}
