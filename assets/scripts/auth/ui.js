'use strict'
const store = require('../store')
const showWordsTemplate = require('../templates/word-listing.handlebars')

const onSuccess = message => {
  $('#message').text(message).addClass('success').removeClass('failure')
  $('form').trigger('reset')
}

const onFailure = message => {
  $('#message').text(message).addClass('failure').removeClass('success')
  $('form').trigger('reset')
}

const onSignUpSuccess = () => {
  onSuccess('New account created! Now sign in below.')
}

const onSignUpFailure = () => {
  onFailure('Not created')
}

const onSignInSuccess = (responseData) => {
  store.user = responseData.user
  onSuccess('Welcome! Add a word or view your list')
  $('.after-auth').show()
  $('.before-auth').hide()
}

const onSignInFailure = () => {
  onFailure('Access denied.')
}

const onChangePasswordSuccess = () => {
  onSuccess('Changed password successfully')
}

const onChangePasswordFailure = () => {
  onFailure('You failed to change password.')
}

const onNewWordSuccess = (response) => {
  onSuccess('New word added!')
}

const onNewWordFailure = () => {
  onFailure('Word was not added.')
}
const onSignOutSuccess = () => {
  store.user = store
  onSuccess('See ya!')
  store.user = {}
  $('.after-auth').hide()
  $('.before-auth').show()
}

const onSignOutFailure = () => {
  onFailure('You\'re still here.')
}

const onViewWordsSuccess = (response) => {
  // showWordsTemplate({words:response.words})
  const showWordsHtml = showWordsTemplate({ words: response.words })
  $('.word-content').html(showWordsHtml)
  console.log('clicked view words.', response.form)
}

// const onViewWordsSuccess = (data) => {
//   console.log('showWordsTemplate is ', showWordsTemplate)
//   const showWordsHtml = showWordsTemplate({ words: data.words })
//   $('.content').html(showWordsHtml)
// }

const onViewWordsFailure = () => {
  onFailure('Sorry! Try again.')
}

module.exports = {
  onSignInFailure,
  onSignInSuccess,
  onSignOutFailure,
  onSignOutSuccess,
  onSignUpFailure,
  onSignUpSuccess,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onViewWordsSuccess,
  onViewWordsFailure,
  onNewWordSuccess,
  onNewWordFailure
}
