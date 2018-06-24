function shout(string)
{
  return 
  string.toUpperCase()
}

function whisper(string)
{
  return
  string.toLowerCase()
}

funtion logShout(string)
{
  console.log("$(string).toUpperCase()")
}


funtion logWhisper(string)
{
  console.log("$(string).toLowerCase()")
}

funtion sayHiToGrandma(string)
{
  if(string.toLowerCase()===string)
  return "I can't hear you!"

  else if(string.toUpperCase()===string)
  return "Yes INDEED!"
  
  else if(string=="I love you,Grandma.")
  return "I love you,too"

}


