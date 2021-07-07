function shout(string){
  return string.toUpperCase()               //return the string as all uppercase
}

function whisper(string){
  return string.toLowerCase()               // return the string as all lowercase
}

function logShout(string){
  console.log(string.toUpperCase())        // log the string as all uppercase
}

function logWhisper(string){
  console.log(string.toLowerCase())         // log the string as all lowercase
}

function sayHiToGrandma(string){
  if (string.toLowerCase() === string){               //if the string is all lowercase, reply with "I can't hear you"
    return("I can't hear you!")
  }
  else if (string.toUpperCase() === string){          //otherwise if the string is all uppercase, reply with "Yes Indeed!"
    return ("YES INDEED!")
  }
  else if (string === "I love you, Grandma."){      //otherwise if the string is "I love you, Grandma." reply with the string "I love you, too"
    return ("I love you, too.")
  }                                                 //test doesn't require output condition if there is a mixed case string. could do an else command here with intended output test.
}
