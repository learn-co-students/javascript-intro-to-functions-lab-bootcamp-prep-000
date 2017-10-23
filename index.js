function shout(string) {
  var s = string.toUpperCase();

  return s;
}

function whisper(string) {
  var s = string.toLowerCase();

  return s;
}
function logShout(string) {
  var s = string.toUpperCase();

  console.log(s);
}
function logWhisper(string) {
  var s = string.toLowerCase();

  console.log(s);
}

function sayHiToGrandma(string) {
  var s = string.toUpperCase();
  var w = string.toLowerCase();

  if( string === "I love you, Grandma."){
    return "I love you, too."
  }
  else if(string === w){
    return "I can't hear you!"
  }
  else if (string === s){
    return "YES INDEED!"

  }
}
