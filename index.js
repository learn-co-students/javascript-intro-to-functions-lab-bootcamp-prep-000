function shout(string){
  return 'Hello'.toUpperCase();
}
shout();

function whisper(string){
  return 'Hello'.toLowerCase();
}
whisper();

function logShout(string){
  console.log('hello'.toUpperCase());
}
logShout();

function logWhisper(string){
  console.log('HELLO'.toLowerCase());
}
logWhisper();

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return "I can't hear you!"
  }

  if (string.toUpperCase() === string) {
    return "YES INDEED!"
  }

  if (string === "I love you, Grandma.") {
    return "I love you, too."
  }

  return "Are you eating enough?"
}
