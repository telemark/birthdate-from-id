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
    birthdateFromId(123)
  },
  {message: 'Input must be 11 digits'},
  'Too short. Input must be 11 digits'
)

tap.throws(
  function () {
    birthdateFromId(123456789101112)
  },
  {message: 'Input must be 11 digits'},
  'Too long. Input must be 11 digits'
)
