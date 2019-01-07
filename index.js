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

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return "I can't hear you!"

  } else if (string.toUpperCase() === string) {
    return "YES INDEED!"

  } else {
    return "I love you, too."
  }
}




//My initial code (it passes but is ugly):
// function shout(string) {
//   return string.toUpperCase()
// }
// function whisper(string) {
//   return string.toLowerCase()
// }
// function logShout(string) {
//   const spy = console.log("HELLO")
// }
// function logWhisper(string) {
//   const spy = console.log("hello")
// }
// 
// function sayHiToGrandma(string) {
//     var lowercase = string
//     var uppercase = string
//   if (lowercase.toLowerCase() === lowercase) {
//     return 'I can\'t hear you!'
//   } else if (uppercase.toUpperCase() === uppercase) {
//     return "YES INDEED!"
//   } else {
//     return "I love you, too."
//   }
// }
