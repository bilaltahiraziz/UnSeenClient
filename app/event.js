'use strict'
const store = require('./store.js')
const authUi = require('./ui.js')
const authApi = require('./api.js')
const getFormFields = require('../lib/get-form-fields.js')

$('#sign-out-button').hide()
$('#sign-out-display').hide()
$('#hide-fields').hide()
$('#contentShowHide').hide()

const onSignUp = function (event) {
  event.preventDefault()
  console.log('Signed Up')

  // get data from form
  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  // api call
  authApi.signUp(data)
    .then(() => authUi.onSignUpSuccess())
    .catch(() => authUi.onSignUpFailure())
}

const onSignIn = function (event) {
  console.log('Signed In')
  event.preventDefault()
  $('#hide-fields').show()

  // get data from form
  const data = getFormFields(event.target)
  console.log(data)

  // api call
  authApi.signIn(data)
    .then((response) => authUi.onSignInSuccess(response))
    .catch(() => authUi.onSignInFailure())
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('change password ran!')

  const data = getFormFields(this)
  authApi.changePassword(data)
    .then(() => authUi.onChangePasswordSuccess())
    .catch(() => authUi.onChangePasswordFailure())
}

const onSignOut = function () {
  console.log('Signed Out')
  // api call
  $('#contentShowHide').hide()
  $('#sign-out-button').hide()
  $('#sign-out-display').hide()
  $('#hide-fields').hide()
  authApi.signOut()
    .then(() => authUi.onSignOutSuccess())
    .catch(() => authUi.onSignOutFailure())
}

const onCreateHouse = function (event) {
  event.preventDefault()
  console.log('Created House')

  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  // api call
  authApi.createHouse(data)
    .then((response) => authUi.onCreateHouseSuccess(response))
    .catch(() => authUi.onCreateHouseFailure())
}

const onIndexHouse = (event) => {
  console.log('Indexing Houses')
  // get the houses from the API
  // check the Network tab!
  authApi.indexHouse()
    .then((response) => authUi.onIndexHouseSuccess(response))
    .catch(() => authUi.onIndexHouseFailure())
}

const onUpdateHouse = (event) => {
  // prevent the page from reloading due to the submit action
  event.preventDefault()
  console.log('Updating House')

  const updateForm = event.target
  const id = $(updateForm).data('id')
  // pass the form to getFormFields and store the data object in another variable
  const data = getFormFields(updateForm)

  authApi
    .updateHouse(data, id)
    .then(() => authUi.onUpdateHouseSuccess())
    .then(onIndexHouse)
    .catch(() => authUi.onUpdateHouseFailure())
}

const onDeleteHouse = function (event) {
  const deleteButton = event.target

  // we need to find the id of the book
  const houseId = $(deleteButton).data('id')

  console.log(houseId)

  authApi
    .deleteHouse(houseId)
    .then(() => authUi.onDeleteHouseSuccess())
    .then(onIndexHouse)
    .catch(() => authUi.onDeleteHouseFailure())
}

// const onShowHouse = () => {
//   console.log('Showing Houses')
//   // get the houses from the API
//   // check the Network tab!
//   authApi.showHouse()
//     .then((response) => authUi.onShowHouseSuccess(response))
//     .catch(() => authUi.onShowHouseFailure())
// }

// const onShowHouse = (event) => {
//   event.preventDefault()
//   console.log('Showing House')

//   const form = event.target
//   const data = getFormFields(form)
//   console.log(data)

//   authApi.showHouse(data)
//     .then((response) => authUi.onShowHouseSuccess(response))
//     .catch(() => authUi.onShowHouseFailure())
// }

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateHouse,
  onIndexHouse,
  onUpdateHouse,
  onDeleteHouse
  // onShowHouse
}
