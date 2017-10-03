function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  var spy = "hello";
  return string.toUpperCase();
 console.log(spy);
}

function logWhisper(string) {
  var spy = "HELLO";
  return string.toLowerCase();
  console.log(spy);

}

function sayHiToGrandma(string) {
  var greeting = "I love you, Grandma.";
  if (string === "I love you, Grandma.") {
    return "I love you, too.";
  }
  if (string.toUpperCase === true) {
    var hear = "HI!!"
    return sayHiToGrandma(hear);
    return "YES INDEED!";
  }
  if (string.toLowerCase === true) {
    var this = "hello there!";
    return sayHiToGrandma(this);
    return "I can\'t hear you!";
  }
  sayHiToGrandma(greeting);
}
