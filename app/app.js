// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authHouseEvents = require('./event.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').on('submit', authHouseEvents.onSignUp)
  $('#sign-in-form').on('submit', authHouseEvents.onSignIn)
  $('#sign-out-button').on('click', authHouseEvents.onSignOut)
  $('#change-password-form').on('submit', authHouseEvents.onChangePassword)

  $('#create-house').on('submit', authHouseEvents.onCreateHouse)
  $('#index-house').on('click', authHouseEvents.onIndexHouse)
  // $('#show-house').on('click', authHouseEvents.onShowHouse)
  // $('#show-house').on('submit', authHouseEvents.onShowHouse)
  $('#index-house-display').on('submit', '.update-house-list', authHouseEvents.onUpdateHouse)
  $('#index-house-display').on('click', '.delete-house-list', authHouseEvents.onDeleteHouse)
})
