//first test
function shout (string) {
  return string.toUpperCase();
}
//second test
function whisper (string2) {
  return string2.toLowerCase();
}
//third test
function logShout (string3) {
  console.log(string3.toUpperCase());
}
//fourth test
function logWhisper (string4) {
 console.log(string4.toLowerCase());
}
//fifth test

function sayHiToGrandma (string5) {
  if (string5 === string5.toLowerCase()) {
    return "I can\'t hear you!";
  } else if (string5 === string5.toUpperCase()) {
    return "YES INDEED!";
  } else if (string5 === "I love you, Grandma."){
    return "I love you, too."
  }
}