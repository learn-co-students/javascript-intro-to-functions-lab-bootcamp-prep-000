function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log(string.toUpperCase())
}
function logWhisper(string) {
  console.log(string.toLowerCase())
}
function sayHiToGrandma(string) {
    var lower = string.toLowerCase();
    var upper = string.toUpperCase();
    if (lower === string) {
        // string is fully lowercase
        return "I can't hear you!";
    }
    if (upper === string) {
        // string is fully uppercase
        return "YES INDEED!";
    }
    if (string === "I love you, Grandma.") {
        return "I love you, too.";
    }
    return "";
}
