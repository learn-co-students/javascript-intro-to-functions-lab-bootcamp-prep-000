function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase());
}
function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
    // if string is lower case
    if (string === string.toLowerCase()) {
        return "I can't hear you!";
    }

    // if string is upper case
    else if (string === string.toUpperCase()) {
        return "YES INDEED!";
    }

    else if (string === "I love you, Grandma.") {
        return "I love you, too.";
    }
}
