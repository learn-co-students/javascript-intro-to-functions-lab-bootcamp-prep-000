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

function sayHiToGrandma(string){
  // Verify if string is lower case
  if(string.toLowerCase() === string){
    return "I can't hear you!";
    // Verify if string is upper case
  } else if (string.toUpperCase() === string){
    return "YES INDEED!";
    // Verify if string is equal to an exact string
  } else if (string === "I love you, Grandma."){
    return "I love you, too.";
  }
}