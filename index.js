function shout(string) {
  return string.toUpperCase();
}

function logShout(string) {
  console.log(string.toUpperCase());

}
function logWhisper(string) {
  console.log(string.toLowerCase());

}
function sayHiToGrandma(string) {
  if (string === string.toLowerCase()){
    return "I can't hear you!";
}

  if (string === string.toUpperCase() ){
    return "YES INDEED!"
  }

  if (string === 'I love you, Grandma.'){
    return "I love you, too.";
  }
  return "Are you eating enough?"
}
function whisper(string) {
  return string.toLowerCase();
}
