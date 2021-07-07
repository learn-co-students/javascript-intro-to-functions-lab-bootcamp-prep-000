function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  var uppercase = string.toUpperCase();
  console.log(uppercase);
}

function logWhisper(string){
  var lowercase = string.toLowerCase();
  console.log(lowercase);
}

function sayHiToGrandma(string) {
  
  var replyOne = "I can't hear you!";
  var replyTwo = "YES INDEED!";
  var replyThree = "I love you, too.";
  
  var holder = string.toLowerCase();
  var holder2 = string.toUpperCase();
  var holder3 = "I love you, Grandma.";
  
  if (holder === string) {
    return replyOne;
  } else if (holder2 === string) {
    return replyTwo;
  } else if (holder3 === string) {
    return replyThree;
  }
}

