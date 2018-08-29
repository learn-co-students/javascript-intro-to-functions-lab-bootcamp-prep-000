// receives one argument and returns it IN ALL UPPER CASE
function shout(message) {
  return message.toUpperCase();
}

//RECEIVES ONE STRING ARGUMENT AND RETURNS IT  in all lower case
function whisper(message) {
  return message.toLowerCase();
}

// call `shout` and log it on the console
function logShout(message) {
  console.log( shout(message) )
}

// call `whisper` and log it on the console
function logWhisper(message) {
  console.log( whisper(message) )
}

// returns different messages depending on the CaSe of the passed string
function sayHiToGrandma(message) {
  var lowercase = "I can't hear you!"
  var uppercase = "Yes Indeed!".toUpperCase()
  var loveYou = "I love you, too."

  if(message.toLowerCase() === message) // message was all lowercase
        return lowercase
  else if(message.toUpperCase() === message) // message was all in uppercase
        return uppercase
  else if("I love you, Grandma." === message)
        return loveYou
}
