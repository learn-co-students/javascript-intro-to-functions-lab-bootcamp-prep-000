function shout(myString) {
  return myString.toUpperCase();
}

function whisper(myString) {
  return myString.toLowerCase();
}

function logShout(myString) {
  console.log(shout(myString));
}

function logWhisper(myString) {
  console.log(whisper(myString));
}

function sayHiToGrandma(myString) {
  if (myString === myString.toLowerCase()) return "I can't hear you!";
  else if (myString === myString.toUpperCase()) return "YES INDEED!";
  else if (myString === "I love you, Grandma.") return "I love you, too.";
  

}
