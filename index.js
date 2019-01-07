function shout(aaa) {
  return aaa.toUpperCase()
}

function  whisper(aaa) {
  return aaa.toLowerCase()
}

function logShout(aaa) {
  console.log(aaa.toUpperCase()) ;
}

function logWhisper(aaa) {
  console.log(aaa.toLowerCase()) ;
}

function sayHiToGrandma(aaa){
  if(aaa.toUpperCase()===aaa)
  { return "YES INDEED!"}
  else if(aaa.toLowerCase()===aaa)
  { return "I can't hear you!"}
  else if (aaa==="I love you, Grandma.") {return "I love you, too."}
}
