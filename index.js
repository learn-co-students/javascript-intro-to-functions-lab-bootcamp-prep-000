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
  if (string.toLowerCase()===string){
    return "I can't hear you!"
  }else if (string.toUpperCase()===string) {
    return "YES INDEED!"
  }else if (string==="I love you, Grandma."){
    return "I love you, too."
  }
}


  // 4) sayHiToGrandma(string) returns "I can't hear you!" if `string` is lowercase:
  //   ReferenceError: sayHiToGrandma is not defined
  //     at Context.<anonymous> (test/index-test.js:40:5)

  // 5) sayHiToGrandma(string) returns "YES INDEED!" if `string` is uppercase:
  //   ReferenceError: sayHiToGrandma is not defined
  //     at Context.<anonymous> (test/index-test.js:44:5)

  // 6) sayHiToGrandma(string) returns "I love you, too." if `string` is "I love you, Grandma."`: