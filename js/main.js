"use strict";


const mainURL = "https://wandering-copper-sight.glitch.me/movies"
var searchedMovie;


renderMovies()

function renderMovies() {
    fetch(mainURL)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))

}
getMovies()
function getMovies() {
    fetch("https://www.omdbapi.com/?apikey=" + OMDB_KEY + "&t=" + searchedMovie)
        .then(response => response.json())
        .then(data => console.log(data))

}
function addMovie(){

}

function deleteMovie(){

}

function editMovie(){

}

