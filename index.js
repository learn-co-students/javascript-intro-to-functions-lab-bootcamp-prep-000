function shout(name){
  return name.toUpperCase();
}


function whisper(name){
  return name.toLowerCase();
}

function logShout(arg){
  console.log(arg.toUpperCase());
}

function logWhisper(arg) {
  console.log(arg.toLowerCase());
}

function sayHiToGrandma(arg) {
  var low = arg.toLowerCase();
  var high = arg.toUpperCase();
  if(arg === low){
    return "I can't hear you!";
  }else if (arg === high) {
    return 'YES INDEED!';
  }else if (arg === "I love you, Grandma.") {
    return 'I love you, too.';
  }
}
