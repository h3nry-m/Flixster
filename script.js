
// Global constants
const api_key = "d8e8e9a8ed16ae9fd3ea37274ab553aa";
const movieResults = document.querySelector(".movies");
const searchForm = document.querySelector("#search");
const load = document.querySelector("#load");
let page = 1

const modalBtn = document.getElementById("modal-btn")
const modal = document.querySelector(".modal")
const closeBtn = document.querySelector(".close-btn")
const modalText = document.querySelector(".modal-text")

const now = document.querySelector("#nowPlaying")

async function testYoutube(movieID) {
    let videoURL = "https://api.themoviedb.org/3/movie/" + movieID + "/videos?api_key=" + api_key + "&language=en-US";
    response = await fetch(videoURL);
    responseData = await response.json();
    videoID = responseData.results[0].key;
    youtubelink = "https://www.youtube.com/embed/" + videoID
    return youtubelink
}

closeBtn.addEventListener('click', exitModal)
searchForm.addEventListener("submit", searchMovies)
load.addEventListener('click', loadMore)

function exitModal () {
    modal.style.display = "none";
}


function loadMore(){
    page += 1;
    currentMovies();
}


async function displayModal (movieID) {
    modal.style.display = "block"
    let apiURL = "https://api.themoviedb.org/3/movie/" + movieID + "?api_key=" + api_key + "&language=en-US";
    response = await fetch(apiURL);
    responseData = await response.json();
    let description = responseData.overview;
    let releaseDate = responseData.release_date;
    let runtime = responseData.runtime;
    let title = responseData.original_title


    let youtubelink = await testYoutube(movieID);
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

async function searchMovies(event) {
    event.preventDefault();
    console.log('im in search movies')
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
    console.log(responseArr);
    displayResults(responseArr); // returns holder 
}

onload = currentMovies()
