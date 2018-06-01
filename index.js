/**
 * shout function takes in a string and returns the string in uppercase letters
 */
function shout(string) {
  return string.toUpperCase();
}

/**
 * whisper function takes in a string and returns the string in lowercase letters
 */
function whisper(string) {
  return string.toLowerCase();
}

/**
 * logShout function takes in a string and logs the string to the console in uppercase letters
 */
function logShout(string) {
  console.log(shout(string));
}

/**
 * logWhisper function takes in a string and logs the string to the console in lowercase letters
 */
function logWhisper(string) {
  console.log(whisper(string));
}

/**
 * sayHiToGrandma function takes in a string and returns Grandma's response according to how "loud" the speaker is
 * This solution uses the ternary operator to complete the function in 3 lines
 */
function sayHiToGrandma(string) {
  let response = "";
  whisper(string) == string ? response = "I can't hear you!" :
    shout(string) == string ? response = "YES INDEED!" :
    string === "I love you, Grandma." ? response = "I love you, too." : response = "";
  return response;
}

/**
 * sayHiToGrandma function takes in a string and returns Grandma's response according to how "loud" the speaker is
 * This solution uses the if/elseif statements to accomplish the goal
 */
 
/*
function sayHiToGrandma(string) {
  if(whisper(string) == string){
    return "I can't hear you!";
  } else if(shout(string) == string) {
    return "YES INDEED!"
  } else if(string === "I love you, Grandma.") {
    return "I love you, too."
  }
}
*/