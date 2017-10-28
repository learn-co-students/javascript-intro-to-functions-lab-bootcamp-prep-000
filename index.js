
/**
todo: A function called shout, takes one argument and
      returns it with all caps
*/

function shout(str) {
  return str.toUpperCase();
}


/**
todo: A function called whisper, takes one argument and
      returns it with all lowercase
*/

function whisper(str) {
  return str.toLowerCase();
}


/**
todo: A function called logShout, takes one argument and
      calls the console with all caps
*/

function logShout(str) {
  console.log(str.toUpperCase());
}


/**
todo: A function called logWhisper, takes one argument and
      calls console with all lowercase
*/

function logWhisper(str) {
  console.log(str.toLowerCase());
}


/**
todo: A function called sayHiToGrandma, takes one argument and
      returns "I can\'t hear you!" if str is  lowercase
*/
function sayHiToGrandma(str) {
  let lowercase = str;
  if (str === "I love you, Grandma.") {
    return "I love you, too.";
  }else if (str.toUpperCase() !== lowercase) {
    return "I can\'t hear you!";
  }else if (lowercase !== str.toLowerCase()) {
    return "YES INDEED!";
  }
}
