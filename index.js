function shout(string)
{
    return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log(string.toUpperCase());
} 

function logWhisper(string){
  return console.log(string.toLowerCase());
}

function sayHiToGrandma(string){
  var ret;
  if(string.toLowerCase() === string)
  {
    ret = "I can't hear you!";
    
  }
  else if(string.toUpperCase() === string)
  {
    console.log("YES INDEED!");
    ret = "YES INDEED!";
  }
  else{
  ret = "I love you, too.";
  }
  return ret;
}

