function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

const spy = "HELLO"
function logShout(string) {
  console.log(string + spy);
}
