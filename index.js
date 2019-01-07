function shout(string) {
   return string.toUpperCase()
}

function whisper(string) {
    return string.toLowerCase()
}

function logShout(string) {
    console.log(string.toUpperCase());

}
function logWhisper(string) {
    console.log(string.toLowerCase());

}

function sayHiToGrandma(string) {
switch(string) {
  case "I love you, Grandma.":
    return "I love you, too.";
    break;
  case string.toUpperCase():
    return "YES INDEED!";
    break;
  case string.toLowerCase():
    return "I can't hear you!"
    break;

    default: "Come on don't be shy, say 'Hi!'";
}
}
