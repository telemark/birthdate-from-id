'use strict'

const tap = require('tap')
const birthdateFromId = require('../index')

tap.equal('2007-01-01', birthdateFromId('01010750160'), 'It returns expected result for F-number')

tap.equal('1958-08-01', birthdateFromId('41085801188'), 'It returns expected result for D-number')
