function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    console.log(string.toUpperCase());
}

function logWhisper(string){
    console.log(string.toLowerCase());
}

function sayHiToGrandma(string){
    var sUpper = string.toUpperCase();
    var sLower = string.toLowerCase();
    var sILove = 'I love you, Grandma.'
    var result = ''
    switch (string) {
        case sILove:
            result = 'I love you, too.';
            break;
        case sLower:
            result = 'I can\'t hear you!';
            break;
        case sUpper:
            result = 'YES INDEED!';
            break;
    }
    return result;
}
