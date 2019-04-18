var uppercase, lowercase;

function shout (string) {
  return string.toUpperCase ();
}

function whisper (string) {
  return string.toLowerCase ();
}

function logShout(string){
uppercase=string.toUpperCase();
string=uppercase;
console.log (uppercase);
}

function logWhisper (string){
  lowercase=string.toLowerCase();
  string=lowercase;
  console.log(lowercase);
}

function sayHiToGrandma(string){
  if (string === string.toLowerCase()) return "I can't hear you!";
  else if (string === "I love you, Grandma.") return "I love you, too.";
  else if (string === string.toUpperCase()) return "YES INDEED!";
}