//shout function
function shout(string){
  return string.toUpperCase()
}

//whisper function
function whisper(string){
  return string.toLowerCase()
}

//logShout function
function logShout(string){
  console.log(string.toUpperCase())
}

//logWhisper function
function logWhisper(string){
  console.log(string.toLowerCase())
}

//sayHiToGrandma function
function sayHiToGrandma(string){
var lowercase = string
  if(lowercase.toLowerCase() === lowercase){
    //console.log('I can\'t hear you')
    return 'I can\'t hear you!'
  }

var uppercase = string
  if (uppercase.toUpperCase() === uppercase){
    //console.log('YES INDEED!')
    return 'YES INDEED!'
  }

var loveYou = string
  if (loveYou === 'I love you, Grandma.'){
      //console.log('I love you too')
      return `I love you, too.`
  }
}
