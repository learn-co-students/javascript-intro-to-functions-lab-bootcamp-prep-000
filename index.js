function logShout (string){
  return string.toUpperCase();
  }
logShout("hello");

function logWhisper (string){
  return string.toLowerCase();
  }
logWhisper("hello");

function sayHiToGrandma(string) {
  if (string.toLowerCase()){
    return "I can't hear you!";
  } else if (string.toUpperCase()){
    return "YES INDEED!"
  } else {
    return string;
  }
}
sayHiToGrandma("hi, grandma.")
