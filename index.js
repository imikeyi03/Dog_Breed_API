'use strict';

// Retrieves the image from the DOG API Breed Endpoint based on user input.

function getDogImage(dogInput) {
  fetch(`https://dog.ceo/api/breed/${dogInput}/images/random`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

//Displays the breed photo to the DOM

function displayResults(responseJson) {
  console.log(responseJson);
  $('.js-search-results').html(`<img src="${responseJson.message}">`);
}


// This function looks at the input text box and sanitizes the input by removing whitespace and making
// the string all lowercase.

  function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let dogInput = $('#typed-breed').val().replace(/ +/g, "").toLowerCase();
    getDogImage(dogInput);
  });
}

//Initilize the App

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});