function shout (string) {
  return string.toUpperCase();
}
function whisper (string) {
  return string.toLowerCase();
}
function logShout (string) {
 string = string.toUpperCase();
  console.log(string);
}
function logWhisper (string) {
  string = string.toLowerCase();
  console.log(string);
}
function sayHiToGrandma (string) {
  let lowercase = 'hello';
  let uppercase = 'HELLO';
  if (string === 'I love you, Grandma.') {
    return "I love you, too."
  }
  else if (string === lowercase) {
    return "I can't hear you!";
  }
  else if (string === uppercase) {
    return "YES INDEED!";
  }
}