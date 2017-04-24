var string = "Hello"

function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
return string.toLowerCase()
}

function logShout() {
  console.log("HELLO")
}

logShout()

function logWhisper() {
  console.log("hello")
}

logWhisper()

function sayHiToGrandma(string){
  if (string === string.toLowerCase()) return "I can't hear you!";
  else if (string === "I love you, Grandma.") return "I love you, too.";
  else if (string === string.toUpperCase()) return "YES INDEED!";
 }

 sayHiToGrandma("hello");
 sayHiToGrandma("I love you, Grandma.");
 sayHiToGrandma("HELLO");
