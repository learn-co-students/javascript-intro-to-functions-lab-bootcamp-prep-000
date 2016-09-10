function shout (Kai) {
  return Kai.toUpperCase ()
}
function whisper (string) {
  return string.toLowerCase ()
}

function logShout (Pablo) {
  var Upper = shout (Pablo)
  console.log (Upper)
}

function logWhisper (string) {
  console.log (string.toLowerCase())
}

function sayHiToGrandma (greeting) {
	if (greeting == "I love you, Grandma.") {
		return "I love you, too."
	}
	if (greeting == greeting.toLowerCase()) {
		return "I can't hear you!"
	}
	if (greeting == greeting.toUpperCase()) {
		return "YES INDEED!"
	}

}
