function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function lowercaseP(lowercase){
  return lowercase.toLowerCase() === lowercase
}

function uppercaseP(uppercase){
  return uppercase.toUpperCase() === uppercase
}

function sayHiToGrandma(string){
  if(string === "I love you, Grandma."){return "I love you, too."}
  if(uppercaseP(string)){return "YES INDEED!"}
  if(lowercaseP(string)){return "I can't hear you!"}
  
}