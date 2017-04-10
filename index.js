function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  return console.log(string.toUpperCase())
}

function logWhisper(string) {
  return console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  /*  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
      expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")
    })

    it('returns "YES INDEED!" if `string` is uppercase', function() {
      expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
    })*/
    if (string === "I love you, Grandma."){
      return "I love you, too."
    }

    else if (string == whisper(string)){
      return 'I can\'t hear you!'
    }

    else if (string == shout(string)) {
      return "YES INDEED!"
    }
}
