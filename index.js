function shout(String) {
return String.toUpperCase()
}

function whisper(String) {
return String.toLowerCase()
}

function logShout(String) {
  console.log(String.toUpperCase());
}

function logWhisper(String) {
  console.log(String.toLowerCase());
}

function sayHiToGrandma(string){
 if (string === string.toLowerCase()) return "I can't hear you!";
 else if (string === "I love you, Grandma.") return "I love you, too.";
 else if (string === string.toUpperCase()) return "YES INDEED!";
}

sayHiToGrandma("hello");
sayHiToGrandma("HELLO");
sayHiToGrandma("I love you, Grandma.");