
// Global constants
let page = 1
const api_key = "d8e8e9a8ed16ae9fd3ea37274ab553aa";

// Query selectors
const movieResults = document.querySelector(".movies");
const searchForm = document.querySelector("#search");
const load = document.querySelector("#load");
const modal = document.querySelector(".modal")
const closeBtn = document.querySelector(".close-btn")
const modalText = document.querySelector(".modal-text")
const now = document.querySelector("#nowPlaying")

// Event listeners
closeBtn.addEventListener('click', exitModal)
searchForm.addEventListener("submit", searchMovies)
load.addEventListener('click', loadMore)

// Calls the current movies so that they're displaying automatically on load
onload = currentMovies()


// Queries the movieDB API for current movies and calls the displayResults functions to display the results
async function currentMovies() {
    let apiURL = "https://api.themoviedb.org/3/discover/movie?api_key=" + api_key + "&page=" + page;
    response = await fetch(apiURL);
    responseData = await response.json();
    responseArr = responseData.results;
    displayResults(responseArr); // returns holder 
}

// Searches the movieDB API for a specific search parameter and calls the displayResults functions to display the results
async function searchMovies(event) {
    event.preventDefault();
    movieResults.innerHTML = ` ` // clears the current movies that automatically show
    let userInput = event.target.search.value; // captures the user input
    let apiURL = "https://api.themoviedb.org/3/search/movie?api_key=" + api_key + "&query=" + userInput;
    response = await fetch(apiURL);
    responseData = await response.json();
    responseArr = responseData.results;
    displayResults(responseArr);
}


// Dynamically displays the results of the array of movie objects passed into it
function displayResults(responseArr) {
    responseArr.forEach(function(movie) {  
    movieResults.innerHTML += `
        <div class = "movie" onclick=displayModal(${movie.id})>
                <img id="${movie.id}" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" width="300px" height="400px" alt="${movie.original_title} poster"></img>
            <div class = "rating">
                <p>&#127775;</p>
                <span id="rating">${movie.vote_average}</span>
            </div>
            <span id="title">${movie.original_title}</span>
        </div>` 
    })}


// Dynamically load a popup with the movie information and an embedded video
async function displayModal (movieID) {
    modal.style.display = "block" // makes the pop up show
    
    // a separate API call for more movie information
    let apiURL = "https://api.themoviedb.org/3/movie/" + movieID + "?api_key=" + api_key + "&language=en-US";
    response = await fetch(apiURL);
    responseData = await response.json();
    let description = responseData.overview;
    let releaseDate = responseData.release_date;
    let runtime = responseData.runtime;
    let title = responseData.original_title


    let youtubelink = await testYoutube(movieID); //generates Youtubelink
    modalText.innerHTML = `
    <h1>${title}</h1>
    <p>Description: ${description}</p>
    <div id=makeRow>
        <p>${releaseDate} | ${runtime} minutes</p>
    </div>
    <iframe width="560" height="315" src="${youtubelink}" 
    frameborder="0" allow="autoplay; encrypted-media" 
    allowfullscreen></iframe>
    `
}


// Retrieves the videoID based off a movieID and return a complete Youtube link
async function testYoutube(movieID) {
    let videoURL = "https://api.themoviedb.org/3/movie/" + movieID + "/videos?api_key=" + api_key + "&language=en-US";
    response = await fetch(videoURL);
    responseData = await response.json();
    videoID = responseData.results[0].key;
    youtubelink = "https://www.youtube.com/embed/" + videoID
    return youtubelink
}

// Causes the modal to disappear (when press X)
function exitModal () {
    modal.style.display = "none";
}

// Loads the next page of current movie results
function loadMore(){
    page += 1;
    currentMovies();
}


/* Notes to self:
When using fetch, it is necessary to use await and make it an async function. 
If you find that the info is not showing, you may need a event.preventDefault() like in searchMovies function. 
*/