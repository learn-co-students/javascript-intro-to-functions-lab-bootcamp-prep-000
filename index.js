
/*  shout(string) receives one argument and returns it in all caps:
    ReferenceError: shout is not defined */
function shout(string) {
  return string.toUpperCase()
}

/*  whisper(string) receives one argument and returns it in all lowercase:
    ReferenceError: whisper is not defined*/
function whisper(string) {
  return string.toLowerCase()
}

/*  logShout(string) calls console.log() its one argument in all caps:
    ReferenceError: logShout is not defined */
function logShout(string) {
  console.log() string.toUpperCase
}

/*  logWhisper(string) calls console.log() its one argument in all lowercase:
    ReferenceError: logWhisper is not defined */
function logWhisper(string) {
    console.log() string.toLowerCase
}

/*  sayHiToGrandma(string) returns "I can't hear you!" if `string` is lowercase:
    ReferenceError: sayHiToGrandma is not defined

    sayHiToGrandma(string) returns "YES INDEED!" if `string` is uppercase:
    ReferenceError: sayHiToGrandma is not defined

    sayHiToGrandma(string) returns "I love you, too." if `string` is "I love you, Grandma."`:
    ReferenceError: sayHiToGrandma is not defined  */
    
function sayHiToGrandma(string) {
  if ((string)===uppercase) {
    return 'YES INDEED!'
  }
  else if ((string)===lowercase) {
    return "I can't hear you!"
  }
  else if ((string)==="I love you, Grandma.")) {
    return "I love you, too."
  }
  }
}
