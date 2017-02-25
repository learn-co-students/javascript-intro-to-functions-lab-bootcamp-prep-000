function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase()
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
    var lowercase = string.toLowerCase();
    var uppercase = string.toUpperCase();
    var love = "I love you, Grandma.";
    switch(string) {
        case lowercase:
            return "I can't hear you!";
        case uppercase:
            return "YES INDEED!";
        case love:
            return "I love you, too.";
        default:
            break;
    }
}
