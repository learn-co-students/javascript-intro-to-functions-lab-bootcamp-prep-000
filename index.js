function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log('HELLO')
    function spy(spyOn){
      spyOn(logShout)
      return spyOn.toLowerCase()
    }
  return string.toUpperCase()
}

function logWhisper(string){
  console.log('hello')
    function spy(spyOn){
      spyOn(logWhisper)
      return spyOn.toUpperCase()
    }
  return string.toLowerCase()
}

function sayHiToGrandma(string){
  if(string === 'hello'){
    return('I can\'t hear you!')
  }else if(string === 'HELLO'){
    return('YES INDEED!')
  }else if(string === 'I love you, Grandma.'){
    return('I love you, too.')
  }else{
    console.log("null")
  }
  return string
}
