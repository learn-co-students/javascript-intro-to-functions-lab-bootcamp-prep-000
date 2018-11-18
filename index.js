'HELLO!'.toUpperCase() // 'HELLO!'
'hello!'.toLowerCase() // 'HELLO!'


//** Shout

function shout(string) {
  return string.toUpperCase()
}

//** Whisper

function whisper(string) {
  return string.toLowerCase()
}

//** logShout

function logShout(string) {
  return console.log(string.toUpperCase())
}

//** logWhisper

function logWhisper(string) {
  return console.log(string.toLowerCase())
}

// ** Hi to Grandmaaaa! :)

function sayHiToGrandma(string)
{
  if (string.toLowerCase() === string)
  {
    return "I can't hear you!";
  }
  else if (string.toUpperCase() === string)
  {
    return "YES INDEED!";
  
  }
  else (string === "I love you Grandma.")
  {
    return "I love you, too.";
  }
}
