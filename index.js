let phrase = "I love you, Grandma.";

shout(phrase);
whisper(phrase);
logShout(phrase);
logWhisper(phrase);
sayHiToGrandma(phrase);

function shout(input) {
  return(input.toUpperCase())
};

function whisper(input) {
  return(input.toLowerCase())
};

function logShout(input){
  console.log(shout(input))
};

function logWhisper(input){
  console.log(whisper(input))
};


function sayHiToGrandma(input){
  let output = (input === input.toLowerCase()) ? "I can't hear you!" : (input === input.toUpperCase()) ? "YES INDEED!" : (input === "I love you, Grandma") ? "I love you, too." : "I love you, too."
  console.log(output)
  return(output)
};
