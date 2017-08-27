const expect = require('expect')

const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')
var uppercase = "I LOVE YOU GRANDMA"

uppercase.toUpperCase() === uppercase // true

var lowercase = 'hello!'

lowercase.toLowerCase() === lowercase // true

var mixedCase = 'Hi there!'

mixedCase.toLowerCase() === mixedCase // false

mixedCase.toUpperCase() === mixedCase // false

describe('shout(string)', () => {
  it('receives one argument and returns it in all caps', () => {

expect(shout('hello')).toEqual('HELLO')
})
})

function shout(string) {
  return string.toUpperCase()
}
