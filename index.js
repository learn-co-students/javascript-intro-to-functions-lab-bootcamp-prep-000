function shout(string){
  return string.toUpperCase();
}

function whisper(string){
 return string.toLowerCase();
}

function logShout(string){
  var log = string.toUpperCase();
  console.log(log);
}

function logWhisper(string){
  var log = string.toLowerCase();
  console.log(log);
}

function sayHiToGrandma(string){
  var log = string;
  var hear = "I can\'t hear you!";
  var hear2 = "YES INDEED!";
  if(log == string.toLowerCase()){

    return hear;
  } else if (log == string.toUpperCase()){
    return hear2.toUpperCase();
  }else if(log == "I love you, Grandma."){
    var love = "I love you, too.";
    return love;
  }
}

shout('hello');
whisper('HELLO');
logShout('hello');
logWhisper('HELLO');
sayHiToGrandma('hello');
sayHiToGrandma("HELLO");
sayHiToGrandma("I love you, Grandma");
