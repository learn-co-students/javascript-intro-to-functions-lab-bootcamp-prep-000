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
  
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  } //check for whisper
  
  if (string === string.toUpperCase()) {
    return "YES INDEED!";
  } //check for shout
  
  if (string === "I love you, Grandma.") {
    return "I love you, too.";
  } //check for sentence
  
}

/* Note: failed when I changed the string BEFORE the first if statement meaning it was changed for all the other checks */

/* Issue whether I needed to make the sentence uppercase to pass or not */

/* Could also refactor to make else if */