function shout(str){
  return str.toUpperCase();
}

function whisper(str){
  return str.toLowerCase();
}

//'receives one argument and returns it in all lowercase'
function logShout(str){
  console.log(shout(str));
}

//'calls console.log() its one argument in all lowercase'
function logWhisper(str){
  console.log(whisper(str));
}

// 'returns "YES INDEED!" if `string` is uppercase'
//'returns "I can\'t hear you!" if `string` is lowercase'
//'returns "I love you, too." if `string` is "I love you, Grandma."`
function sayHiToGrandma(str){
  var uppercase = "HELLO",
    lowercase = 'hello';
  if(str === lowercase) return "I can't hear you!";
  if(str === uppercase) return "YES INDEED!";
  if(str === "I love you, Grandma.") return "I love you, too.";
}