function shout (string){
  return string.toUpperCase();
}

function whisper (string) {
  return string.toLowerCase();
}

function logShout(string){
  console.log(string.toUpperCase());
}

function logWhisper(string){
  console.log(string.toLowerCase());
}

function sayHiToGrandma (string){
  var lowercase = "hello!";
  var uppercase ="HELLO!";
  var love = "I love you, Grandma";
  if(string.toLowerCase()===lowercase){
    return "I can't hear you!";
  }else if(string.toUpperCase()===uppercase){
    return "YES INDEED!";
  }else if(string===love){
      return "I love you, too.";
    }
}
