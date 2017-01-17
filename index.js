function shout(lowercase){
return  lowercase.toUpperCase();
  
}

function whisper(uppercase){
  return uppercase.toLowerCase();
}

function logShout(lowercase){
  console.log(lowercase.toUpperCase());
}
function logWhisper(uppercase){
  console.log(uppercase.toLowerCase());
}
function sayHiToGrandma(input){
  if(input === "I love you, Grandma."){
    return "I love you, too.";
  } else if (input == input.toLowerCase()){
    return "I can\'t hear you!";
  }else{
    return "YES INDEED!";
  }
}