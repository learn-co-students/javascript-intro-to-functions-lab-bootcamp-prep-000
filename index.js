function shout(string) {
  
  return string.toUpperCase()
  
}

function whisper(string) {
  
  return string.toLowerCase()
  
}

function logShout(string){
  
  const spy = "HELLO"
  console.log(spy)
  
}

function logWhisper(string){
  
  const spy = "hello"
  console.log(spy)
  
}



function sayHiToGrandma(string){



  if (string.toLowerCase() === string){
    
    const words = 'I can\'t hear you!';
    return words;
  }
  
 if (string.toUpperCase() === string) {
    
    
    const message1 ='YES INDEED!';
    return message1
    
  }  
  
 if (string === "I love you, Grandma."){
  
  const message2 = "I love you, too.";
    return message2 
}
}