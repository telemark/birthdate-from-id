'use strict'

const tap = require('tap')
const birthdateFromId = require('../index')

tap.equal('1971-11-18', birthdateFromId('18117198725'), 'It returns expected result')
