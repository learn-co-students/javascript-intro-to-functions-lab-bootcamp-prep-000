function shout(string){
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string){
    console.log(string.toUpperCase());
}

function logWhisper(string){
    console.log(string.toLowerCase());
}

var newString = 'I love you, Grandma.';

function sayHiToGrandma(string){
    if (string.toLowerCase() === string){
        return "I can't hear you!";
    } else if (string.toUpperCase() === string) {
        return "YES INDEED!";
    } else if (string === newString) {
        return "I love you, too.";
    }
    return false;
}
