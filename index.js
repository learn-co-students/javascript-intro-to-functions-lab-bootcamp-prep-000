function shout(string) { 
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    string = string.toUpperCase();
    console.log(string);
    return string;
}

function logWhisper(string) {
    string = string.toLowerCase();
    console.log(string);
    return string;

}

function sayHiToGrandma(string) {
    //var littleString = string.toLowerCase();
    if (string === 'I love you, Grandma.') {
        return 'I love you, too.'
    }
    if (string.toLowerCase() === string) {
        return 'I can\'t hear you!'
    }
    if(string.toUpperCase() === string) {
        return 'YES INDEED!'
    }
    


}