'use strict';

// Retrieves the image from the DOG API Breed Endpoint based on user input.

function getDogImage(dogInput) {
  fetch(`https://dog.ceo/api/breed/${dogInput}/images/random`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('That breed doesn\'t exist. Try again.'));
}

//Displays the breed photo to the DOM if a error code 404 isn't returned by fetch

function displayResults(responseJson) {
  console.log(responseJson);
  
  if(responseJson.code == "404") {
    alert("Not found!");
  } else {
    $('.js-search-results').html(`<img src="${responseJson.message}">`);
  }
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