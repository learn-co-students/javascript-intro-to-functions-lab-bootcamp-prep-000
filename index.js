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
  var test = string;
  console.log("test="+test);
  
  if(test==="I love you, Grandma."){
    return "I love you, too.";
  }else if(test === test.toUpperCase()){
    return "YES INDEED!"; 
  }else if(test === test.toLowerCase()){
    return "I can't hear you!";
  }
  
}
  
