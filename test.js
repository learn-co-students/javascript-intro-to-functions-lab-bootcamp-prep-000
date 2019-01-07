const expect = require('expect')
const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')

describe('index', () => {
  // Stuff in here, too
  // `describe` function provided by test runner - in this case is "Mocha" - and is basically a container for our tests

})

describe('shout(string)', () => {
  it('receives one argument and returns it in all caps', () => {
    // internal describe calls are used for describing functions to be written
    // in this case--test says "i think there will be a function called `shout` that should take one arg. that arg will be a string and the function will return that string in all caps.
  })
  expect(shout('hello')).to.equal('HELLO')
})
