function shout(str) {
    return str.toUpperCase();
}

function whisper(str) {
    return str.toLowerCase();
}

function logShout(str) {
    console.log(str.toUpperCase());
}

function logWhisper(str) {
    console.log(str.toLowerCase());
}

function sayHiToGrandma(str) {
    var loveStr = "I love you, Grandma."
    if (str === loveStr) {
        return "I love you, too."
    }
  
    if (str.toLowerCase() ===  str) {
        return "I can't hear you!"
    } 

    if (str.toUpperCase() === str) {
        return "YES INDEED!"
    }
}
