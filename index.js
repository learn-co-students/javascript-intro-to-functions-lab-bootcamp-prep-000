function shout (string){
  return string.toUpperCase();
}
function whisper (string){
  return string.toLowerCase();
}
function logShout (string){
  console.log(string.toUpperCase());
}
function logWhisper (string){
  console.log(string.toLowerCase());
}
function sayHiToGrandma (string){
  var lowercase = string;
  
  if (lowercase.toLowerCase() === string) {
    return "I can\'t hear you!";
  } else if (lowercase.toUpperCase() === string) {
    return "YES INDEED!";
  }else {
    return "I love you, too.";
  }

}



// function sayHiToGrandma (string){
//   var uppercase = string;
//   uppercase.toUpperCase() === string;
//   return "YES INDEED!";
// }
// function sayHiToGrandma (string){
//   var mixedCase = string;
//   mixedCase.toUpperCase() === string;
//   mixedCase.toLowerCase() === string;
//   return "I love you, too.";
// }
