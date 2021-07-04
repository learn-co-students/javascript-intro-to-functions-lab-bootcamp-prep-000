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
/* deleted these lines of initial code 4/24/2018 as learned use of if and else if conditional statements. This deleted code did pass. Bootcamp labs and intro to functions used same lab. -(RG)

function sayHiToGrandma(string) {
   if (string === string.toLowerCase()) {
    return "I can\'t hear you!"
  }
  if (string === string.toUpperCase()) {
    return "YES INDEED!"
  }
  if (string ==="I love you, Grandma.") {
    return "I love you, too."
    } 
}
*/

function sayHiToGrandma(string) {
   if (string === string.toLowerCase()) {
    return "I can\'t hear you!"
  }   else if (string === string.toUpperCase()) {
    return "YES INDEED!"
  }   else if (string ==="I love you, Grandma.") {
    return "I love you, too."
    } 
}
  