'use strict'

const store = require('./store.js')
const config = require('./config.js')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const createHouse = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/houses',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const indexHouse = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/houses',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateHouse = function (data, id) {

  /*
      data = {
          houses: {
              address: '1234 Street St.',
              size: '2000',
              structure: 'addition'
          }
      }
  */
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/houses/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const deleteHouse = function (id) {
  console.log(id)
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/houses/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  }
  )
}

// const showHouse = function () {
//   return $.ajax({
//     method: 'GET',
//     url: config.apiUrl + '/houses',
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     }
//   })
// }

// const showHouse = function (data) {
//   console.log(data)
//   return $.ajax({
//     method: 'GET',
//     url: config.apiUrl + '/houses' + data.id,
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     }
//   })
// }

module.exports = {
  signUp,
  signIn,
  signOut,
  createHouse,
  indexHouse,
  updateHouse,
  deleteHouse,
  changePassword
  // showHouse
}
