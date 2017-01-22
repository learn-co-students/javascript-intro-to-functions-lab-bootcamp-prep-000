function shout (greeting){
  return greeting.toUpperCase();
}

function whisper (textToWhisper){
  return textToWhisper.toLowerCase();
}

function logShout (greeting){
  console.log(greeting.toUpperCase());
}

function logWhisper (greeting){
  console.log(greeting.toLowerCase());
}

function sayHiToGrandma (greeting){
  if(greeting.toLowerCase() === greeting)
  {
    return "I can\'t hear you!"
  }
  if(greeting.toUpperCase() === greeting)
  {
    return "YES INDEED!"
  }
  if (greeting === "I love you, Grandma.") {
    return "I love you, too."
  }
}