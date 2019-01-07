
function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    const spy = 'HELLO';
    if (spy.toUpperCase === spy) {

    }
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    const spy = 'hello';
    if (spy.toLowerCase === spy) {

    }
    console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
    var lowercase = "hello";
    var uppercase = "HELLO";
    var iloveyou = "I love you, Grandma."

    if (lowercase === string) {
        return "I can\'t hear you!";
    }else if (uppercase === string) {
        return "YES INDEED!";
    }else if (iloveyou === string) {
        return "I love you, too.";
    }
}

console.log(shout("hello"));
console.log(whisper('HELLO'));
logShout('hello');
logWhisper('HELLO');
console.log(sayHiToGrandma("hello"));
console.log(sayHiToGrandma("HELLO"));
console.log(sayHiToGrandma("I love you, Grandma."));
