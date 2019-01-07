function shout(p) {
  return p.toUpperCase();
}

function whisper(p) {
  return p.toLowerCase();
}

function logShout(p) {
  console.log(shout(p));
}

function logWhisper(p) {
  console.log(whisper(p));
}

function sayHiToGrandma(p) {
  if (p === "I love you, Grandma.")
    return "I love you, too.";
  if (p === shout(p))
    return "YES INDEED!";
  if (p === whisper(p))
    return "I can't hear you!";
}
