const shout = (string) => {
  return string.toUpperCase();
}
// shout();

  whisper = (string) => {
  return string.toLowerCase()
  // console.log(string.toLowerCase())
}

// mixedCase return half toLowerCase & half to toUpperCase
function logShout(string) {
    // return string.toLowerCase()
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}


function sayHiToGrandma(string) {
   if(string.toLowerCase() === string) {
    return "I can't hear you!"
    }
  else if (string.toUpperCase() === string)  {
    return "YES INDEED!"
    }
   else if ("I love you, Grandma." === string ) {
    return "I love you, too."
   }
}
  


