function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}

var lowerCase = string.toLowerCase()
var upperCase = string.toUpperCase()


function sayHiToGrandma(string){
  if (string === string.toLowerCase()){
    //var lowerCase = string.toLowerCase();
    return ('I can\'t hear you!');
   }
   else if (string === string.toUpperCase()){
     //var upperCase = 'YES INDEED!';
     return ('YES INDEED!');
     }
     else if (string === "I love you, Grandma."){
      //var mixedCase = 'I love you, too.';
      return ("I love you, too.")
      }
    }
