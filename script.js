
// Global constants
const api_key = "d8e8e9a8ed16ae9fd3ea37274ab553aa";
const movieResults = document.querySelector(".movies");


async function searchMovies() {
    let apiURL = "https://api.themoviedb.org/3/search/movie?api_key=" + api_key + "&query=" + search;
    response = await fetch(apiURL);
    responseData = await response.json();
    responseArr = responseData.results;
    console.log(responseData);
}



async function currentMovies() {
    let apiURL = "https://api.themoviedb.org/3/discover/movie?api_key=" + api_key;
    response = await fetch(apiURL);
    responseData = await response.json();
    responseArr = responseData.results;
    responseArr.forEach(function(movie) {
        
        movieResults.innerHTML += `
            <div class = "movie">
                <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" width="200px" height="300px"></img>
                <div class = "rating">
                    <p>&#127775;</p>
                    <span id="rating">${movie.vote_average}</span>
                </div>
                <span id="title">${movie.original_title}</span>
            </div>
        ` 
    });
}

// currentMovies()
searchedMovies()
