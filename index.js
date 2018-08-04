 function shout(greeting) { 
  return greeting.toUpperCase(); 
}

function whisper(greeting) {
  return greeting.toLowerCase();
}

function logShout(greeting) {
  let shout = greeting.toUpperCase();
  console.log(shout);
}

function logWhisper(greeting) {
  let whisper = greeting.toLowerCase();
 console.log(whisper);
  
}

function sayHiToGrandma(greeting) {
  if (greeting.toLowerCase() === greeting) {
    return "I can't hear you!"; 
  } else if (greeting.toUpperCase() === greeting) {
    return "YES INDEED!"; 
  }  else if (greeting === 'I love you, Grandma.') {
    return 'I love you, too.'; 
 }
}


   
  


