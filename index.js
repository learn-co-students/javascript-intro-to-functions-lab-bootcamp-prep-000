function shout(s){
  return s.toUpperCase();
}

function whisper(w){
  return w.toLowerCase();
}

function logShout(s){
  console.log(shout(s));
  return;
}

function logWhisper(s){
  console.log(whisper(s));
  return;
}

function sayHiToGrandma(s){
  if(s === whisper(s)) return "I can't hear you!";
  else if (s === shout(s)) return "YES INDEED!";
  else if (s === "I love you, Grandma.") return "I love you, too."
}
