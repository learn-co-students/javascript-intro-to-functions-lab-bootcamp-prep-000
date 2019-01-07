function shout(stringobject) {
    return stringobject.toUpperCase()
}

function whisper(stringobject) {
    return stringobject.toLowerCase()
}

function logShout(stringobject) {
    console.log(stringobject.toUpperCase())
}

function logWhisper(stringobject) {
    console.log(stringobject.toLowerCase())
}

function sayHiToGrandma(stringobject) {
    if (stringobject === stringobject.toUpperCase()) {
        return "YES INDEED!"
    }
    else if (stringobject === stringobject.toLowerCase()) {
        return "I can't hear you!"
    }
    else if (stringobject === "I love you, Grandma.") {
        return "I love you, too."
    }
    else {
        return "Why, the better to eat you with!"
    }
}
