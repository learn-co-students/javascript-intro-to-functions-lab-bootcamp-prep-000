function shout(String) {
  let str1 = String.toUpperCase();
  return str1;
}

function whisper(String) {
  let str1 = String.toLowerCase();
  return str1;
}
function logShout(String) {
  let str1 = String.toUpperCase();
  console.log(str1);
}

function logWhisper(String) {
  let str1 = String.toLowerCase();
  console.log(str1);
}

function sayHiToGrandma(String) {
  if (String === String.toUpperCase()) {
    return 'YES INDEED!'
  }
  if (String === String.toLowerCase()) {
    return "I can't hear you!"
  } 
  if (String === "I love you, Grandma.") {
    return 'I love you, too.'
  }
}