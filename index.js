//Shout
function shout(string){ return string.toUpperCase() }

//Whisper
function whisper(string){ return string.toLowerCase() }

//Shout and print 
function logShout(string){ console.log(shout(string)) }

//Whisper and print
function logWhisper(string){ console.log(whisper(string)) }

function sayHiToGrandma(string){
  var grandma = ''
  if (string.toLowerCase() === string) {
    grandma = 'I can\'t hear you!'
  }else if (string.toUpperCase() === string) {
    grandma = 'YES INDEED!'
  }else if (string === 'I love you, Grandma.') {
    grandma = "I love you, too."
  }
  return grandma
}