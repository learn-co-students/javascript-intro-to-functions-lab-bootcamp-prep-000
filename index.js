function shout(String) {
  return String.toUpperCase()
}
shout('hello')

function whisper(String) {
  return String.toLowerCase()
  
}
whisper('HELLO')

function logShout(String) {
  console.log(`${String.toUpperCase()}`)
  return `${String}.toUpperCase()`
}

function logWhisper(String) {
   console.log(`${String.toLowerCase()}`)
   return `${String}.tolowerCase()`
}
  
function sayHiToGrandma(String) {
  var check=`${String}`
  
  if(check==="I love you, Grandma.") {
    return "I love you, too."
  }
  if(check===`${String.toUpperCase()}`) {
   return "YES INDEED!"
  }
  if(check===`${String.toLowerCase()}`) {
   return "I can't hear you!"
  }

}
  

