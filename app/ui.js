'use strict'
const store = require('../app/store.js')
// const authHouseEvents = require('./event.js')
// const authApi = require('./api.js')

const onSignUpSuccess = function () {
  $('#auth-display').html('<p>User signed up successfully!</p>')
  // RESET ALL FORMS
  $('form').trigger('reset')
}

const onSignUpFailure = function () {
  $('#auth-display').html('<p>User signed up was not successful!</p>')
}

const onSignInSuccess = function (response) {
  $('#auth-display').html('<p>User signed in successfully!</p>')

  // RESET ALL FORMS
  $('form').trigger('reset')
  $('#showHide').hide()
  $('#sign-out-button').show()
  $('#sign-out-display').show()
  $('#contentShowHide').show()
  $('#hide-fields').show()
  // console.log(response)
  // store data from the response in my store object
  store.user = response.user
}

const onSignInFailure = function () {
  $('#auth-display').html('<p>User signed in was not successful!</p>')
}

const onChangePasswordSuccess = function () {
  $('#auth-display').text('Changed password successfully')
  $('#auth-display').removeClass()
  $('#auth-display').addClass('success')
  // console.log('onChangePasswordSuccess ran and nothing was returned!')
}

const onChangePasswordFailure = function (error) {
  $('#auth-display').text('Error on change password')
  $('#auth-display').removeClass()
  $('#auth-display').addClass('failure')
  console.error('onChangePasswordFailure ran. Error is :', error)
}

const onSignOutSuccess = function () {
  $('#auth-display').html('<p>User signed out successfully</p>')
  $('#showHide').show()
  $('form').trigger('reset')
}

const onSignOutFailure = function (error) {
  $('#auth-display').html('<p>Error while signing out</p>', error)
}

const onCreateHouseSuccess = function (response) {
  const houseHtml = `
                    <div>
                      <p>${response.house.address}</p>
                      <p>${response.house.size}</p>
                      <p>${response.house.structure}</p>
                      <p>House just created</p>
                    </div>
                  `
  $('#create-house-display').html(houseHtml)

  $('form').trigger('reset')
}

const onCreateHouseFailure = function (error) {
  $('#create-house-display').text('Failure while trying to create house', error)
}

const onIndexHouseSuccess = function (response) {
  // string to represent the html of our houses display
  // initialize as empty
  let houseHtml = ''

  // use forEach to display every house
  response.houses.forEach((house) => {
    houseHtml += `
                    <div>
                      <p>${house.address}</p>
                      <p>${house.size}</p>
                      <p>${house.structure}</p>
                      
                      <form class="update-house-list" data-id=${house._id}>

                      <input name="houses[address]" type="text" placeholder="Change Address">
                      <input name="houses[size]" type="text" placeholder="Change Size">
                      <input name="houses[structure]" type="text" placeholder="Change Structure">
                      <button type="submit">Update House</button>
                      </form>

                      <button class="delete-house-list" data-id=${house._id}>Delete House</button>

                    </div>
                  `
  })

  $('#index-house-display').html(houseHtml)
  $('form').trigger('reset')
}

const onIndexHouseFailure = function (error) {
  $('#index-house-display').text('There was an error indexing houses', error)
}

const onUpdateHouseSuccess = function () {
  // const bookHtml = `
  //   <div>
  //     <h4>${response.book.title}</h4>
  //     <p>${response.book.author}</p>
  //     <p>Review: 10 Stars</p>
  //   </div>
  // `
  $('#auth-display').html('Success. House updated!')
  // (authHouseEvents.onIndexHouse)
  $('form').trigger('reset')
}

const onUpdateHouseFailure = function (error) {
  $('#auth-display').text('Failure while trying to update house', error)
}

const onDeleteHouseSuccess = function () {
  $('#auth-display').html('Success. House deleted!')

  $('form').trigger('reset')
}

const onDeleteHouseFailure = function (error) {
  $('#auth-display').text('Failure while trying to delete house', error)
}

// const onShowHouseSuccess = function (response) {
//   // string to represent the html of our houses display
//   // initialize as empty
//   let houseHtml = ''

//     // const address = $('#house[address]').text()
//     console.log(response.house)

//   // use forEach to display every house
//   response.houses.find((houses.address) => {
//     houseHtml += `
//                     <div>
//                       <p>${house.address}</p>
//                       <p>${house.size}</p>
//                       <p>${house.structure}</p>
//                     </div>
//                   `
//   })

//   $('#show-house-display').html(houseHtml)

//   $('form').trigger('reset')
// }

// const onShowHouseFailure = function () {
//   $('#show-house-display').text('Failure while trying to show house')
// }

// const onShowHouseSuccess = function (response) {
//   const houseHtml = `
//                     <div>
//                     <p>${response.house.address}</p>
//                     <p>${response.house.size}</p>
//                     <p>${response.house.structure}</p>
//                       <p>Showing Selected Home</p>
//                     </div>
//                   `
//   $('#show-house-display').html(houseHtml)

//   $('form').trigger('reset')
// }

// const onShowHouseFailure = function () {
//   $('#show-house-display').text('Failure while trying to show house')
// }

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onCreateHouseSuccess,
  onCreateHouseFailure,
  onIndexHouseSuccess,
  onIndexHouseFailure,
  onUpdateHouseSuccess,
  onUpdateHouseFailure,
  onDeleteHouseSuccess,
  onDeleteHouseFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
  // onShowHouseSuccess,
  // onShowHouseFailure
}
