'use strict';

function getDogImage(dogInput) {
  fetch(`https://dog.ceo/api/breed/${dogInput}/images/random`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}


function displayResults(responseJson) {
  console.log(responseJson);
  $('.js-search-results').html(`<img src=" ${responseJson.message}">`);
  
}


  function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let dogInput = $('#dropDownSelect').val();
    getDogImage(dogInput);
  });
}



$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});