function shout(args) {
  args = args.toUpperCase();
  return args;
}
function whisper(args) {
  args = args.toLowerCase();
  return args;
}
function logShout(args) {
  args = args.toUpperCase();
  console.log(args);
}
function logWhisper(args) {
  args = args.toLowerCase();
  console.log(args);
}
function sayHiToGrandma(args) {
  if(args === args.toLowerCase() ) {
    return "I can't hear you!";
  } else if(args === args.toUpperCase()) {
      return "YES INDEED!";
    } else if(args === "I love you, Grandma.") {
      return "I love you, too."
    }
}
