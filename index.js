function shout(string) {
  return string.toUpperCase();
}
function whisper(string){
  return string.toLowerCase();
}
function logShout(string){
  console.log(string.toUpperCase());
};
function logWhisper(string){
  console.log(string.toLowerCase());
};


function sayHiToGrandma(string){
  if (string === "I love you, Grandma."){
    return "I love you, too."
  };
  if (string.toUpperCase() === string){
    var uppercase = "HELLO!"
    return "YES INDEED!"
  };
  if (string.toLowerCase() === string){
    var lowercase = 'hello!'
    return "I can\'t hear you!"

  };
}
