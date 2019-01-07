function shout(str){
  return str.toUpperCase();
}

function whisper(str){
  return str.toLowerCase();
}

function logShout(str){
  console.log(str.toUpperCase());
}

function logWhisper(str){
  console.log(str.toLowerCase());
}

function sayHiToGrandma(str){
  var lowerStr = str.toLowerCase();
  var upperStr = str.toUpperCase();
  if(str==lowerStr) return "I can't hear you!";
  if(str==upperStr) return "YES INDEED!";
  if(str=="I love you, Grandma.") return "I love you, too."
}
