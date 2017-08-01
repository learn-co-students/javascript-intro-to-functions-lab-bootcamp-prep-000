
function shout(string){ return string.toUpperCase() //HELLO !
}
function whisper(string){ return  string.toLowerCase() //hello !
}
function logWhisper(string){ console.log( string.toLowerCase() )//hello !
}
function logShout(string){ console.log(string.toUpperCase()) //HELLO !
}
function sayHiToGrandma(mixedCase){

  if( mixedCase === "I love you, Grandma." ){
    return "I love you, too."
  }else if(mixedCase.toUpperCase() === mixedCase){
    return "YES INDEED!"
  }else if( mixedCase.toLowerCase() === mixedCase ){
    return "I can't hear you!"
  }

}
