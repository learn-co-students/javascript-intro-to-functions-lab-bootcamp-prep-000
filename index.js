/* receives one argument and returns it in all caps */

function shout(string) {
  return string.toUpperCase();
}

/* receives one argument and returns it in all lowercase */

function whisper(string) {
  return string.toLowerCase();
}

/* calls console.log() its one argument in all caps */

function logShout(string) {
  console.log("hello".toUpperCase());
}

/* calls console.log() its one argument in all lowercase */

function logWhisper(string) {
  console.log("HELLO".toLowerCase());
}

/* returns "I can\'t hear you!" if `string` is lowercase

  returns "YES INDEED!" if `string` is uppercase

  returns "I love you, too." if `string` is "I love you, Grandma." */
  
  function sayHiToGrandma(string) {
  
    if (string == "hello") {
      return("I can\'t hear you!");
    } else if (string == "HELLO") {
        return("YES INDEED!");
    } else {
        if ("I love you, Grandma.");
        return("I love you, too.");
    }
  }