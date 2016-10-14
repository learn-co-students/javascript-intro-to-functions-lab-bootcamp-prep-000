function shout(string)
{
    return string.toUpperCase();
}

function whisper(string)
{
    return string.toLowerCase();
}

function logShout(string)
{
    console.log(shout(string));
}

function logWhisper(string)
{
    console.log(whisper(string));
}

function sayHiToGrandma(string)
{
    var lower = string.toLowerCase();
    var upper = string.toUpperCase();
    var love = "I love you, Grandma.";
    if(string === upper) {
        return "YES INDEED!";
    } else if(string === lower) {
        return "I can't hear you!";
    } else if(string === love) {
        return "I love you, too.";
    }
}
