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
  var answer
   if(string.toLowerCase() === string) {
     answer = "I can't hear you!";
   } else if(string.toUpperCase() === string) {
     answer = "YES INDEED!";
   } else if(string === "I love you, Grandma.") {
     answer = "I love you, too.";
   }
   return answer;
}