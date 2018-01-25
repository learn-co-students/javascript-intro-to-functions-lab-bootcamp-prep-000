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
  const shout = string.toUpperCase();
  const whisper = string.toLowerCase();
  const love = "I love you, Grandma.";
  
  if (string === shout){
    return "YES INDEED!";
  } else if (string === whisper){
    return "I can\'t hear you!";
  } else if (string === love){
    return "I love you, too.";
  }
}