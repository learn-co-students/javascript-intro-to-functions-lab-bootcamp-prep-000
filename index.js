
function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(shout(string));
}

function logWhisper(string) {
  console.log(whisper(string));
}

function sayHiToGrandma(string) {
  var allUpper = (string.toUpperCase()===string);
  var allLower = (string.toLowerCase()===string);
  if(allUpper){
    return "YES INDEED!";
  }else if(allLower){
    return "I can\'t hear you!";
  }else if(allUpper == false && allLower ==false){
    return "I love you, too.";
  }else{
    return "Something wrong";
  }
}
