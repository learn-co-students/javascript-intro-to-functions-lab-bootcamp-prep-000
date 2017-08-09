function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log(string.toUpperCase());
}

function logWhisper(string){
  console.log(string.toLowerCase());
}

var uppercase = "HELLO!"
uppercase.toUpperCase() === uppercase
var lowercase = "hello!"
lowercase.toLowerCase() === lowercase

function sayHiToGrandma(string){
  if (string === lowercase) {
    console.log("I can't hear you!");
  } else if (string === uppercase) {
    console.log("YES INDEED!");
  } else if (string === "I love you, Grandma") {
    console.log("I love you too");
  }
}
