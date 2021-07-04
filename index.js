function shout(Hello) {
  return Hello.toUpperCase()
}

function whisper(Hello)  {
  return Hello.toLowerCase()
}

function logShout(Hello) {
  console.log(`HELLO`)
}

function logWhisper(Hello) {
  console.log(`hello`)
}


function sayHiToGrandma(lowercase) {
  if (lowercase.toLowerCase() === lowercase) {
    return `I can't hear you!`
  } 
  else if (lowercase.toUpperCase() === lowercase) {
  return `YES INDEED!`
  }
  else {
    return `I love you, too.`
  }
}



  

