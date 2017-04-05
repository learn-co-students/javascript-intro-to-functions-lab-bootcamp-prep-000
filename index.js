//returns argument to uppercase
function shout(string) {
          return string.toUpperCase();
}

//returns argument to lowercase
function whisper(string) {
          return string.toLowerCase();
}

//return log of the argument in uppercase
function logShout(string) {
          console.log(string.toUpperCase());
}

//return log of the argument in lowercase
function logWhisper(string) {
          console.log(string.toLowerCase());
}

//return a string if the argument is in lowercase
function sayHiToGrandma(string) {
          if(string === string.toLowerCase())
            return "I can't hear you!";
          else if(string === string.toUpperCase()) 
            return "YES INDEED!";

          if(string === "I love you, Grandma.")
            return "I love you, too.";
}


//return a string if the argument is in uppercase
