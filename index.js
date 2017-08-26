function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

//All they're asking you to do in the function is just log whatever string they pass in as an argument to the console but in all capital letters.//

function logShout(string) {
  shout(string)
  console.log(shout(string))
  }


//test #3 is checking that when you input 'hello', you're getting 'HELLO'
//test #4 is checking that when you input 'HELLO', you're getting 'hello'

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return ("I can\'t hear you!")
  } if (string === string.UpperCase()){
    return ("YES INDEED!")
  } if (string === "I love you, Grandma.")
    return ("I love you, too.")
}

sayHiToGrandma("hello")//expect "I can/'t hear you!"
sayHiToGrandma("HELLO")//expect "YES INDEED!"
sayHiToGrandma("I love you, Grandma.")//expect "I love you, too."
