
// Global constants
const api_key = "d8e8e9a8ed16ae9fd3ea37274ab553aa";
// const youtubeapi_key = "AIzaSyDIWD3SBPEdLzi7kXWAyc1i5HoB8Ni28G0";
const movieResults = document.querySelector(".movies");
const temporary = document.querySelector(".temp");
const searchForm = document.querySelector("form");
const load = document.querySelector("#load");
let page = 1

const modalBtn = document.getElementById("modal-btn")
const modal = document.querySelector(".modal")
const closeBtn = document.querySelector(".close-btn")
const modalText = document.querySelector(".modal-text")



async function testYoutube(movieID) {
    console.log("i'm here")
    let videoURL = "https://api.themoviedb.org/3/movie/" + movieID + "/videos?api_key=" + api_key + "&language=en-US";
    response = await fetch(videoURL);
    responseData = await response.json();
    videoID = responseData.results[0].key;
    youtubelink = "https://www.youtube.com/embed/" + videoID
    // console.log(youtubelink)
    return youtubelink
}

// testYoutube()

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


    let youtubelink = await testYoutube(movieID);
    console.log(youtubelink);
    modalText.innerHTML = `
    <p>Description: ${description}</p>
    <p>Release Date: ${releaseDate}</p>
    <p>Runtime: ${runtime} minutes</p>
    <iframe width="420" height="315"
    src="${youtubelink}">
    </iframe> 
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



// displayMovieInfo()

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
    console.log(responseArr);
    displayResults(responseArr); // returns holder 
}

currentMovies()



// modalBtn.onclick = function () {
//     modal.style.display = "block"
// }

// closeBtn.onclick = function() {
//     modal.style.display = "none"
// }

// window.onclick = function(e) {
//     if (e.target == modal) {
//         modal.style.display = "none"
//     }
// }


// responseArr.forEach(function(movie)
// ${movie.overview}
// ${movie.release_date} = release date
// ${movie.overview} = text description


// attach the click to the image poster 
// make a separate call to get the movie info API 
// 

// temporary.addEventListener('click', function (event) {

//     if (event.target.matches("#modal-btn")) {
//         console.log('clicked')
//         modal.style.display = "block"
//     }

//     if (event.target.matches(".close-btn")) {
//         modal.style.display = "none"
//     }

// }, false);