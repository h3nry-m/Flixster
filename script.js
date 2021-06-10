
// Global constants
const api_key = "d8e8e9a8ed16ae9fd3ea37274ab553aa";
const movieResults = document.querySelector(".movies");
const searchForm = document.querySelector("form");
const load = document.querySelector("#load");
let page = 1

searchForm.addEventListener("submit", searchMovies)
load.addEventListener('click', loadMore)


function loadMore(){
    page += 1;
    currentMovies();
}


function displayResults(responseArr) {
    responseArr.forEach(function(movie) {  
    movieResults.innerHTML += `
        <div class = "movie">
            <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" width="300px" height="400px"></img>
            <div class = "rating">
                <p>&#127775;</p>
                <span id="rating">${movie.vote_average}</span>
            </div>
            <span id="title">${movie.original_title}</span>
        </div>` 
    })}


async function searchMovies(event) {
    event.preventDefault();
    movieResults.innerHTML = ` `
    let userInput = event.target.search.value;
    let apiURL = "https://api.themoviedb.org/3/search/movie?api_key=" + api_key + "&query=" + userInput;
    response = await fetch(apiURL);
    responseData = await response.json();
    responseArr = responseData.results;
    displayResults(responseArr);
}


async function currentMovies() {
    let apiURL = "https://api.themoviedb.org/3/discover/movie?api_key=" + api_key + "&page=" + page;
    response = await fetch(apiURL);
    responseData = await response.json();
    responseArr = responseData.results;
    console.log(responseArr)
    displayResults(responseArr);
}

currentMovies()
// searchedMovies()


// responseArr.forEach(function(movie)
// ${movie.overview} = text description
