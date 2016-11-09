function shout(str) {
    return str.toUpperCase()
}

function whisper(str) {
    return str.toLowerCase()
}

function logShout(str) {
    return console.log(str.toUpperCase())
}

function logWhisper(str) {
    return console.log(str.toLowerCase())
}

function sayHiToGrandma(str) {
    if (str == "I love you, Grandma.") {
        return "I love you, too."
    }
    var lower = true;
    var upper = true;
    for (var i = 0; i < str.length; i++) {
        var ch = str[i];
        if (ch == ch.toUpperCase()) {
            lower = false;
        } else if (ch == ch.toLowerCase()) {
            upper = false;
        }
    }
    if (lower == true) {
        return "I can't hear you!"
    } else if (upper == true) {
        return "YES INDEED!"
    }
}
