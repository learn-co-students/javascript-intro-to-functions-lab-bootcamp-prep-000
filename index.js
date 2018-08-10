function logShout(string){
  var str = "hello"
  console.log(str.toUpperCase())
}

function logWhisper(string)
{
  var str = "Hello"
  console.log(str.toLowerCase())
  
}

function shout(string){
  var str = "hello"
  console.log(str.toUpperCase())
return string.toUpperCase()
}

function whisper(string)
{
  var str = "Hello"
  console.log(str.toLowerCase())
  return (str.toLowerCase())
}
function sayHiToGrandma(input){
  if(input === "I love you, Grandma.")
  {
    console.log(`${input}`)
    return `I love you, too.`
  }
  if(input === input.toLowerCase())
  {
    return `I can't hear you!`
  }
  if(input === input.toUpperCase())
  {
    return `YES INDEED!`
  }
}

sayHiToGrandma("I love you, Grandma.")
