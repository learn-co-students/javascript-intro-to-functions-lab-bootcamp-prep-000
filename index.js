function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string.toUpperCase() === string)
    return "YES INDEED!";
  else if (string.toLowerCase() === string)
    return "I can\'t hear you!";
  else if (string == "I love you, Grandma.")
    return "I love you, too.";
}

// function sayHiToGrandmaAgain(string) {
//   function response() {
//     // var message = "I'm not your grandma, fool! You better run on home to her though, before I make you my B****!\n ERROR MESSAGE ERROR MESSAGE ERROR MESSAGE\n If you are recieving this message you are not making the right calls in your if statement. REVIEW AND FIX!!!"
//     // ERROR MESSAGE ERROR MESSAGE ERROR MESSAGE
//     // If you are recieving this message you are not making the right calls in your if statement. Review AND FIX!!!"
//     if (string.toUpperCase() === string)
//       message = "YES INDEED!"
//     else if (string === string.toLowerCase())
//       message = "I can\'t hear you!"
//     else if (string === "I love you, Grandma.")
//       message = "I love you, too."
//     return message;
//   }
//   return response();
// }
