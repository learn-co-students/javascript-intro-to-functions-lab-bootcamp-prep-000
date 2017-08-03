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
  if(string === "I love you, Grandma."){
    return "I love you, too.";
    console.log('i love you works')
  }else if (string.toLowerCase === string) {
    return "I can't hear you!";
    console.log('lowercase works')
  }
  else if (string.toUpperCase === string) {
    return "YES INDEED!"
    console.log('uppercase works')
  }
}
sayHiToGrandma("HELLO");

//function sayHiToGrandma(string) -> returned "I can't here you if string is lowercase"
//returns 'yes, indded' if string is uppercase
//if string is I love you, grandma -> return I love you, too
