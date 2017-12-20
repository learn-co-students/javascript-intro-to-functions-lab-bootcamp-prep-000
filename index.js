var shout = (w) => w.toUpperCase();

var whisper = (W) => W.toLowerCase();

var logShout = (w) => console.log(shout(w))

var logWhisper = (W) => console.log(whisper(W))

var sayHiToGrandma = (s) => {
  if (s === "I love you, Grandma.") return "I love you, too."
  if (s.match(/[a-z]/)) {
    return "I can't hear you!";
  } else {
    return shout("yes indeed!")
  }
}