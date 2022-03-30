"use strict";


const mainURL = "https://wandering-copper-sight.glitch.me/movies"
var searchedMovie;
let newMovie = movieSearch()

renderMovies()

function renderMovies() {
    fetch(mainURL)
        .then(response => response.json())
        .then(data => console.log((data)))
        .catch(error => console.log(error))

}

movieSearch()
function movieSearch() {
    fetch(`https://www.omdbapi.com/?apikey=` + OMDB_KEY + `&t=` + searchedMovie)
        .then(response => response.json())
        .then(data => console.log(data))
}

addMovieList()
function addMovieList(){
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMovie),
    };
    fetch(mainURL, options)
        .then( response => console.log(response) )
        .then( data => console.log(data))
        .catch( error => console.error(error) );

}




function deleteMovie() {

}

function editMovie() {

}

