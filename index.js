function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string) {
  console.log(shout(string));
}

function logWhisper(string) {
  console.log(whisper(string));
}

function sayHiToGrandma(string) {
  let msg;
  switch (string) {
    case whisper(string):
      msg = "I can't hear you!"
      break;
    case shout(string):
      msg = "YES INDEED!"
      break;
    case 'I love you, Grandma.':
      msg = "I love you, too."
      break;

  }
  return msg;
}
