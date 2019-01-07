function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()

}

function logShout(string){
var  newString=string.toUpperCase();
  console.log(newString);

}

function logWhisper(string) {
//var  yoheyaa = string.toUpperCase();
  console.log(string.toLowerCase());

}

function sayHiToGrandma(string){
  var lowercase=string
  if (lowercase.toLowerCase() === lowercase) {
    console.log("I can't hear you!");
  }
}

function sayHiToGrandma(string){
    if (string.toUpperCase()===string) {
      return  "YES INDEED!"
    }
    else if (string.toLowerCase() === string) {
      return "I can't hear you!"
    }
    else if ( string === "I love you, Grandma.") {
      return "I love you, too."
    }
}
