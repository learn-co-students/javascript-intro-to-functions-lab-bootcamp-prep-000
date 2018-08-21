function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  string = string.toUpperCase()
  console.log(string)
}
function logWhisper(string) {
  string = string.toLowerCase()
  console.log(string)
}
function sayHiToGrandma(string) {
  var whisp = string.toLowerCase()
  var shou = string.toUpperCase()
  var ilove = 'I love you, Grandma.'
  if (string === whisp) {
    return "I can't hear you!"
  } else if (string === shou) {
    return "YES INDEED!"
  } else if (string === ilove) {
    return "I love you, too."
  }
    
  
}