'use strict'

const config = require('../config')
const store = require('../store')

const signUp = formData => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

const signIn = formData => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}

const changePassword = formData => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

const signOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const newWord = formData => {
  return $.ajax({
    url: config.apiUrl + '/words',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

const getWords = () => {
  return $.ajax({
    url: config.apiUrl + '/words',
    method: 'GET',
    contentType: 'application/json',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const editWord = (form, definition, partOfSpeech, originLang) => {
  return $.ajax({
    url: config.apiUrl + '/words/' + store.word.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      word: {
        form: form,
        definition: definition,
        part_of_speech: partOfSpeech,
        origin_lang: originLang
      }
    }
  })
}

const deleteWord = (wordId) => {
  return $.ajax({
    url: config.apiUrl + '/words/' + wordId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  editWord,
  newWord,
  getWords,
  deleteWord
}
