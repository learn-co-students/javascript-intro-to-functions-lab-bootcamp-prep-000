function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(shout(string))
}

function logWhisper(string){
  console.log(whisper(string))
}

function sayHiToGrandma(string){
  var toLowerCase = whisper(string)
  var toUpperCase = shout(string)
  var otherString = "I love you, Grandma."
  if(toLowerCase == string){
    return ("I can't hear you!")
  }else if(toUpperCase == string){
    return ("YES INDEED!")
  }else if(otherString == string){
    return("I love you, too.")
  }
}
  
  
shout("hello")
whisper("HELLO")
logShout("Hi how r you!")
logWhisper("Hi How d you do")
sayHiToGrandma("I love India")
sayHiToGrandma("I LOVE INDIA")
sayHiToGrandma("i love india")