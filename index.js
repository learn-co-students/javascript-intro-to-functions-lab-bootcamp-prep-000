function shout(string) {
	return string.toUpperCase()
}

function whisper(string){
	return string.toLowerCase()
}

function logShout(string){
	var shout = string.toUpperCase()
	console.log(shout)
}

function logWhisper(string){
	var whisper = string.toLowerCase()
	console.log(whisper)
}

function sayHiToGrandma(string){
	var uppercase = "YES INDEED!"
	var lowercase = "I can't hear you!"
	var loveyou = "I love you, too."
	if (string === "HELLO"){
		return uppercase
	}
	else if (string === "hello") {
		return lowercase
	}
	else if (string === "I love you, Grandma.") {
		return loveyou
	}
}
