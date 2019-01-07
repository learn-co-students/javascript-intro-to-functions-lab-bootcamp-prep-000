function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log('HELLO')
//overthought this one by alot,
//simply convert thhe  funvtion to  call logShout(string)
// and  put the uppercase input as a consloe command and use argumrnt string to call it
}
logShout('string')


function logWhisper(string) {
  console.log('hello')
}
logWhisper('string')

function sayHiToGrandma(string){

  if (string === string.toLowerCase()){
    return "I can't hear you!"
  }else if (string === string.toUpperCase()){
    return "YES INDEED!"
  }else if (string === "I love you, Grandma."){
    return "I love you, too."
  }
}
