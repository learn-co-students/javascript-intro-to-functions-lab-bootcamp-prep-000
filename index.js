var uppercase = "HELLO!"

uppercase.toUpperCase() === uppercase // true

var lowercase = 'hello!'

lowercase.toLowerCase() === lowercase // true

var mixedCase = 'Hi there!'

var string = 'I love you, Grandma'


function shout(uppercase) {
    return uppercase.toUpperCase()

}

function whisper(lowercase) {
  return lowercase.toLowerCase()


}

function logShout(uppercase) {
    console.log(uppercase.toUpperCase())

}

function logWhisper(lowercase){
    console.log(lowercase.toLowerCase())
}

function sayHiToGrandma(string) {

  if (string === string.toLowerCase()){
    return("I can't hear you!")}

    else if (string === string.toUpperCase()) {
      return ("YES INDEED!")}

      else if (string === "I love you, Grandma."){
        return ("I love you, too.")
      }
}
