function shout (string) {
  return string.toUpperCase()
}

function whisper (string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}


function sayHiToGrandma(string) {
  var loveYouToo= "I love you, too."
  var yesIndeed = "YES INDEED!"
  var cantHear = "I can't hear you!"
    if (string === "I love you, Grandma.") {
    return loveYouToo
  } else if  (string === string.toUpperCase()) {
   return yesIndeed
 } else {
   return cantHear
}

}
