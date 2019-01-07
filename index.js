function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}
// all good here, below is what i'm having trouble with ; o;

function logShout(string) {
  var uppercase = string.toUpperCase();//makes string uppercase and saves it to...
  console.log(uppercase);

}

function logWhisper(string) {
  var lowercase = string.toLowerCase();//place method here
  console.log(lowercase)
}

function sayHiToGrandma(string) {
  var lowercase = string.toLowerCase();
  console.log(lowercase)

  var uppercase = string.toUpperCase();
  console.log(uppercase);

  if (string === lowercase) {
    return ('I can\'t hear you!')

  } else if (string === uppercase) {
    return ('YES INDEED!')

  } else if (string === "I love you, Grandma.") {
    return ('I love you, too.')
  }
}
