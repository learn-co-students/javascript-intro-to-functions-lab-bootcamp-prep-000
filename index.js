function shout(string){
  return string.toUpperCase();
}
function whisper(string){
  return string.toLowerCase();
}
function logShout(string){
  console.log(string.toUpperCase());
}
function logWhisper(string){
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string){
  var Ican = 'I can\'t hear you!'
  if(string == "hello"){
    return Ican;
  }
}
function sayHiToGrandma(string){
  var Icant = 'I can\'t hear you!'
  var Ican = 'YES INDEED!'
  var love = "I love you, too."
  
  if(string === "hello"){
    return Icant;
  }
  else if(string ==="HELLO"){
    return Ican
  }
  else{
    return love
  }
}