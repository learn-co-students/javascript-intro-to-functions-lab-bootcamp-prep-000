function shout(string){
  return string.toUpperCase();
}


function whisper(string){
  return string.toLowerCase()
}


function sayHiToGrandma(string){
var love = "I love you, Grandma.";
var result = string.toLowerCase() === string;
var result2 = string.toUpperCase() === string;
var result3 = string == love;

var response1 = "I can't hear you!";
var response2 = "YES INDEED!";
var response3 = "I love you, too.";

if (result == true)
return  response1;
if(result2 == true)
return response2;
if(result3 == true)
return   response3;
}


function logWhisper(string){
  var change = string.toLowerCase();
  console.log(change);
}


function logShout(string){
  var change = string.toUpperCase();
  console.log(change);
}
