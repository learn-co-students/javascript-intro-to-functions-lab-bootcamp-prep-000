function shout(aStr){
  return aStr.toUpperCase();
}

function whisper(aStr){
  return aStr.toLowerCase();
}

function logShout(aStr){
  console.log(aStr.toUpperCase());
}

function logWhisper(aStr){
  console.log(aStr.toLowerCase());
}

function sayHiToGrandma(aStr){
  if (aStr===aStr.toUpperCase()){
    return "YES INDEED!";
  } else if (aStr==='I love you, Grandma.') {
    return "I love you, too.";
  } else if (aStr===aStr.toLowerCase()){
    return "I can't hear you!";
  }
}