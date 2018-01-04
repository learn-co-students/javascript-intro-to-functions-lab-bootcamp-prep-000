function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(hello) {
  console.log(hello.toUpperCase())
}
function logWhisper(hello) {
  console.log(hello.toLowerCase())
}
function sayHiToGrandma(hello) {
  if (hello === hello.toLowerCase())
    return "I can't hear you!";
  else if (hello === hello.toUpperCase())
    return "YES INDEED!";
  else
    return "I love you, too.";
}