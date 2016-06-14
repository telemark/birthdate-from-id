'use strict'

const tap = require('tap')
const birthdateFromId = require('../index')

tap.throws(
  function () {
    birthdateFromId()
  },
  {message: 'Missing required input'},
  'it requires input'
)

tap.throws(
  function () {
    birthdateFromId(1234)
  },
  {message: 'Incorrect length. Must be 11 digits'},
  'Too short. It requires input to be 11 digits.'
)

tap.throws(
  function () {
    birthdateFromId(1234567891011)
  },
  {message: 'Incorrect length. Must be 11 digits'},
  'Too long. It requires input to be 11 digits.'
)
