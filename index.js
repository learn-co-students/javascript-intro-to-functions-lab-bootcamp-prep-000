function shout(string) {
 return string.toUpperCase() 
}

function whisper(string) {
 return string.toLowerCase() 
}

function logShout(string){
  console.log(shout(string))
}

function logWhisper(whisper){
  console.log("hello")
}

function sayHiToGrandma(greeting){
  if (greeting.toLowerCase() === greeting){ 
   return "I can\'t hear you!";
  } else if (greeting.toUpperCase() === greeting){ 
    return "YES INDEED!";
  } else if (greeting === "I love you, Grandma."){ 
    return "I love you, too.";
  }
}