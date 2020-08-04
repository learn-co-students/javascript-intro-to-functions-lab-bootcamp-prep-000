// learning to use functions that have specific outcomes

// function to return upper case version of overload
function shout(string)
{
  return string.toUpperCase() // simplify to one call, not: string = string.blah(), return string
}

// function to return lower case version of overload
function whisper(string)
{
  return string.toLowerCase()
}

// returns a console log in upper case
function logShout(string)
{
  return console.log(string.toUpperCase())
}

// returns a console log in lower case
function logWhisper(string)
{
  return console.log(string.toLowerCase())
}

// return a specific answer to a specific question 
function sayHiToGrandma(string)
{
  if(string === string.toLowerCase())
  {
    string = "I can\'t hear you!"
    return string
  }
  
  if(string === string.toUpperCase())
  {
    string = "YES INDEED!"
    return string
  }
  
  if(string === "I love you, Grandma.")
  {
    string = "I love you, too."
    return string
  }
}