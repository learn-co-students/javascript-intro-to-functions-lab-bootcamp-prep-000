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
    var stringL = string.toLowerCase();
    var stringU = string.toUpperCase();
    var ily = "I love you, Grandma.";

    if(string === stringL){
        return "I can't hear you!"
    }else if (string === stringU) {
        return "YES INDEED!"
    }else if (string === ily) {
        return "I love you, too.";
    }
}
