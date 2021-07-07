function shout(string) {return string.toUpperCase()}

function whisper(string) {return string.toLowerCase()}

function logShout(string) {
  var upperCase = shout(string);
  console.log(upperCase);
}

function logWhisper(string) {
  var lowerCase = whisper(string);
  console.log(lowerCase);
}

function sayHiToGrandma(string) {
  if (string === whisper(string)) {
    return("I can't hear you!");
  } else if (string === shout(string)) {
    return("YES INDEED!");
  } else if (string === ("I love you, Grandma.")) {
    return ("I love you, too.")
  }

}

// function sayHiToGrandma(HELLO) {return("YES INDEED!")}

// function sayHiToGrandma(I love you, Grandma.) {return("I love you, too.")}
