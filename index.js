function shout(string) {
    return string.toUpperCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function whisper(string) {
    return string.toLowerCase();
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
    var caseCheck = string;

    if(string.toLowerCase() === caseCheck) {
        return "I can't hear you!";
    } else if(string.toUpperCase() === caseCheck) {
        return "YES INDEED!";
    }

    if(string === "I love you, Grandma.") {
        return "I love you, too.";
    }
}
