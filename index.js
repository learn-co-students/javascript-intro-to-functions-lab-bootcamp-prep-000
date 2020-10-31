function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  var lowercase = string
  var exp = "I love you, Grandma"
  if (lowercase == exp) {
    return "I love you, too"
  } else if (lowercase.toUpperCase(string) === lowercase){
    return "YES INDEED!"
  } (lowercase.toLowerCase(string) === lowercase){
    return "I can't hear you!"
  }
}
