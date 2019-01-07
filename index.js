// First test

function shout(string){
    return string.toUpperCase();
}

shout("hi");

// Second test
function whisper(string){

  return string.toLowerCase();
}

whisper("HELLO");

// Third test

function logShout(string){
  console.log(string.toUpperCase());
}

// Fourth test

function logWhisper(string){
  console.log(string.toLowerCase());
}

// Fifth test

function sayHiToGrandma(stringe){
   if (stringe.toUpperCase() === stringe){
      return "YES INDEED!";
   } else if (stringe.toLowerCase() === stringe){
      return "I can't hear you!";
   } else if (stringe === "I love you, Grandma."){
      return "I love you, too.";
   }
}
