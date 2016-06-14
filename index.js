'use strict'

function datePadding (date) {
  var padded = date.toString()
  if (padded.length === 1) {
    padded = '0' + date.toString()
  }
  return padded
}

module.exports = function birthdateFromId (id) {
  if (!id) {
    throw new Error('Missing required input')
  }

  const personalid = id.replace(/\D+/, '').toString()

  if (!personalid.length === 11) {
    throw new Error('Incorrect length. Must be 11 digits')
  }

  const now = new Date()
  const personalYearEnd = parseInt(personalid.substr(4, 2), 10)
  const realYearEnd = parseInt(now.getFullYear().toString().substr(2, 2), 10)
  var realYearStart = parseInt(now.getFullYear().toString().substr(0, 2), 10)
  var birthYear

  if (personalYearEnd > realYearEnd) {
    realYearStart--
  }

  birthYear = realYearStart.toString() + datePadding(personalYearEnd.toString())

  return birthYear + '-' + personalid.substr(2, 2) + '-' + personalid.substr(0, 2)
}
