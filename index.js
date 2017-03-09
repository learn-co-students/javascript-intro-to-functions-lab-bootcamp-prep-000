function shout(argu){
  argu.toUppercase() === argu
  return(argu)
}
function whisper(argu){
  argu.toLower() === argu
  return(argu)
}
function logShout(argu){
  console.log(argu.toUppercase())

}
function logWhisper(argu){
  console.log(argu.toLowercase())

}
function sayHiToGrandma(argu){
  if(argu.toLowercase()=== argu){
    return("I can't hear you!")
  }
  else if(argu.toUppercase()=== argu){
    return("YES INDEED!")
  }
  else{
    argu = argu.toLowercase()
    str = "I love you, Grandma."
    if(argu === str ){
      returns ("I love you, too.")
    }
  }
}
