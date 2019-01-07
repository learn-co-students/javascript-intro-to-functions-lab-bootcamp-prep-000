function shout(string) {
  return string.toUpperCase();
}

shout("hello!"); // 'HELLO!'

function whisper(string) {
  return string.toLowerCase();
}

whisper("HELLO!"); // 'hello!'

function logShout(string) {
  console.log(string.toUpperCase());
}

logShout("hello!"); // HELLO!

function logWhisper(string) {
  console.log(string.toLowerCase());
}

logWhisper("HELLO!"); // hello!

function sayHiToGrandma(string) {
  if(string == string.toUpperCase()) {
    return "YES INDEED!"
  }
  else if(string === "I love you, Grandma.") {
    return "I love you, too."
  }
  else {
    return "I can't hear you!";
  }
}

sayHiToGrandma("I love you, Grandma.") // 'I love you, too.'
