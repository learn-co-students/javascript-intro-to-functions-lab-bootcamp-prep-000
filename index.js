function shout(string) {
    return string.toUpperCase()
}

function whisper(string) {
    return string.toLowerCase()
}
function logShout(string) {
    var lowercase = string
    console.log(lowercase.toUpperCase());
}
function logWhisper(string) {
    console.log(string.toLowerCase());
}
function sayHiToGrandma(string) {
    var myVar = string
    if(myVar.toLowerCase() === string){
        return "I can't hear you!"
    }
    if(myVar.toUpperCase() === string){
        return "YES INDEED!"
    }
    if(myVar === "I love you, Grandma."){
        return "I love you, too."
    }
}
