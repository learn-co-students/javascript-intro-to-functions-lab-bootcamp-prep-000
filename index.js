
function shout(input) {
  return input.toUpperCase();
}

function whisper(input) {
  return input.toLowerCase();
}

function logShout(input) {
  console.log(input.toUpperCase());
}

function logWhisper(input) {
  console.log(input.toLowerCase());
}

function sayHiToGrandma(input) {
  if (input.toLowerCase() === input){
    return "I can't hear you!";
  } else if (input.toUpperCase() === input) {
    return "YES INDEED!";
  } else if (input === "I love you, Grandma.") {
    return "I love you, too.";
  }
}
