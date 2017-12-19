function shout(string) {
    return string.toUpperCase();
}

shout('hello');

function whisper(string) {
    return string.toLowerCase();
}

whisper('string');

function logShout(string) {
    console.log(string.toUpperCase());
}

logShout('string');

function logWhisper(string) {
    console.log(string.toLowerCase());
}

logWhisper('string');

function sayHiToGrandma(string) {
    if (string === string.toLowerCase()) {
        return "I can't hear you!";
    }
    else  if (string === string.toUpperCase()) {
        return "YES INDEED!";
    }
    else if (string === "I love you, Grandma.") {
        return "I love you, too.";
    }
}

sayHiToGrandma('string');