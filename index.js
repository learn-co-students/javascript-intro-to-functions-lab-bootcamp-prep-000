// return string in all caps
function shout(str) {
  return str.toUpperCase();
}

// return string in all lowercase
function whisper(str) {
  return str.toLowerCase();
}

// calls console.log() its one argument in all caps
function logShout(str) {
  console.log(str.toUpperCase());
}

// calls console.log() its one argument in all lowercase
function logWhisper(str) {
  console.log(str.toLowerCase());
}

function sayHiToGrandma(str) {
  // var response = "";
  switch (str) {
    case whisper(str):
      return "I can't hear you!";
      break;
    case shout(str):
      return "YES INDEED!";
      break;
    case "I love you, Grandma.":
      return "I love you, too.";
      break;
    default:
      return "Hm?";
  }
  // return response;
}

// return grandma's responses
// function sayHiToGrandma(str) {
//   if (str === whisper(str)) {
//     return "I can't hear you!";
//   } else if (str === shout(str)) {
//     return "YES INDEED!";
//   } else if (str === "I love you, Grandma.") {
//     return "I love you, too.";
//   } else {
//     return "Hm?"
//   }
// }
