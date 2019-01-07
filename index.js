function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
log.shout()
  expect(shout('hello')).toEqual('HELLO')
function shout(string) {
  return string.toUpperCase('HELLO')
}
function whisper(string) {
  return string.toLowerCase('hello')
}
function happyHolidays(string) {
  return string("Happy holidays!")
}
function happyHolidaysTo(name){
  return string("Happy holidays, ${name}!")
}
function happyHolidayTo(holiday, name){
  return string("Happy ${holiday}, ${name}!")
}
function holidayCountdown(days, holiday) {
  return string("It's {days} days until ${holiday}!")
}
