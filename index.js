/*Problem # 1*/
function shout(string) {
  return string.toUpperCase();
}

/*Problem #2*/
function whisper(string) {
  return string.toLowerCase();
}

/*Problem #3*/
function logShout(string) {
  console.log(string.toUpperCase());
}

/*Problem # 4 */
function logWhisper(string) {
  console.log(string.toLowerCase())
}

/*Problem #5 */
function sayHiToGrandma(string) {
  if (string === string.toLowerCase()){
    return "I can't hear you!"
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!"
  } else if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
}
