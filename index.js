function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  //var upperCaseString = string.toUpperCase()
  console.log(string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  var greeting = string;
  if (greeting === string.toLowerCase())
  {
      return 'I can\'t hear you!'
  }
  else if (greeting === string.toUpperCase()) 
  {
      return 'YES INDEED!'
  }
  else if (greeting === 'I love you, Grandma.')
  {
      return 'I love you, too.'
  }
  else {
    return false;
  }
}

