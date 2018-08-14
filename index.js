function shout(string){
  return string.toUpperCase()
}
function whisper(string1){
  return string1.toLowerCase()
}
function logShout(string2){
  console.log(string2.toUpperCase())
}
function logWhisper(string3){
  console.log(string3.toLowerCase())
}
function sayHiToGrandma(string4){
  if ((string4.toLowerCase())===string4){
    string4 = "I can't hear you!"
  } if ((string4.toUpperCase())===string4){
      string4 = "YES INDEED!"
  }if (string4 === "I love you, Grandma."){
      string4 = "I love you, too."
  }
  return string4
}


  