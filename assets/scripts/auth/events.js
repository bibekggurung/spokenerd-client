'use strict'
const store = require('../store')

const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui.js')

const onSignup = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = (event) => {
  event.preventDefault()
  console.log('signed out.')
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onNewWord = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log('formData ', formData)
  api.newWord(formData)
    .then(ui.onNewWordSuccess)
    .catch(ui.onNewWordFailure)
}

const onViewWords = (event) => {
  event.preventDefault()
  api.getWords()
    .then(ui.onViewWordsSuccess)
    .catch(ui.onViewWordsFailure)
}

const onDeleteWord = (event) => {
  event.preventDefault()
  const wordId = $(event.target).closest('section').data('id')
  api.deleteWord(wordId)
    .then(() => onViewWords(event))
    .catch(ui.failure)
}

const onEditWord = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log('Edit clicked')
  api.editWord(formData)
    .then(ui.onEditWordSuccess, 'success clicked')
    .catch(ui.onEditWordFailure, 'fail click')
}

const addHandlers = event => {
  $('#sign-up').on('submit', onSignup)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#new-word').on('submit', onNewWord)
  $('#edit-word').on('submit', onEditWord)
  $('#view-words').on('submit', onViewWords)
  $('.content').on('click', '.delete-word', onDeleteWord)
}

module.exports = {
  addHandlers
}
