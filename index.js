function shout(string) {
  return string.toUpperCase();
}
function whisper(string) {
  return string.toLowerCase();
}
function logShout(string) {
  console.log(string.toUpperCase());
}
function logWhisper(string) {
  console.log(string.toLowerCase());
}
function sayHiToGrandma(string) {
  if (string === logShout || string === shout) {
    console.log("YES INDEED");
  } else if (string === whisper || string === logWhisper) {
    console.log("I can\'t hear you!")
  }
}
