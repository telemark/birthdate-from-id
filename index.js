'use strict'

const datePadding = require('./lib/date-padding')

module.exports = id => {
  if (!id) {
    throw new Error('Missing required input')
  }

  let personalid = id.toString().replace(/\D+/, '').toString()

  if (personalid.length !== 11) {
    throw new Error('Input must be 11 digits')
  }

  if (parseInt(personalid[0], 10) > 3) {
    const numStart = parseInt(personalid[0], 10) - 4
    personalid = `${numStart}${personalid.substr(1, 10)}`
  }

  const now = new Date()
  const personalYearEnd = parseInt(personalid.substr(4, 2), 10)
  const realYearEnd = parseInt(now.getFullYear().toString().substr(2, 2), 10)
  let realYearStart = parseInt(now.getFullYear().toString().substr(0, 2), 10)
  let birthYear

  if (personalYearEnd > realYearEnd) {
    realYearStart--
  }

  birthYear = realYearStart.toString() + datePadding(personalYearEnd.toString())

  return birthYear + '-' + personalid.substr(2, 2) + '-' + personalid.substr(0, 2)
}
