function shout(string) {
  return string.toUpperCase();
}



function whisper(string) {
  return string.toLocaleLowerCase();
}


function logShout(string) {
  console.log(string.toUpperCase());

}

function logWhisper(string) {
  console.log(string.toLocaleLowerCase());
}

function sayHiToGrandma(string) {
  if (string.toLocaleLowerCase() === string) {
    return "I can't hear you!";
  }

if (string.toUpperCase() === string) {
  return "YES INDEED!";
}

if (string === "I love you, Grandma.") {
  return "I love you, too.";
}
}
