function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return  string.toLowerCase();
}

whisper("HELLO");

function logShout(string){
  console.log(string.toUpperCase())
}
logShout('Great');


function logWhisper(string){
  console.log(string.toLowerCase())
}
logWhisper("Hello");

function sayHiToGrandma(string){
  if(string.toLowerCase()===string){
    return "I can't hear you!";
  }else if(string.toUpperCase()===string){
    return "YES INDEED!";
  }else if('I love you, Grandma.'===string){
    return "I love you, too."
  }
}