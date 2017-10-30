function  shout(string){
    return string.toUpperCase()
}

function whisper(string){
    return string.toLowerCase()
}

function logShout(string){
  console.log("hello".toUpperCase())
}

function logWhisper(string){
  console.log("HELLO".toLowerCase())
}

function sayHiToGrandma(string){
  var lowercase = "hello",
      uppercase = "HELLO",
      loveYou = "I love you, Grandma.";

/*      if (hour < 18) {
    greeting = "Good day";
}*/

  if (string === lowercase) {
      return "I can't hear you!";
    } else if (string === uppercase) {
      return "YES INDEED!";
    } else if (string === "I love you, Grandma.") {
      return "I love you, too.";
    }
}
