const urlParams = new URLSearchParams(window.location.search); //define object to get url params
const matchedMovies = decodeURI(urlParams.getAll('movieMatches')).split(","); // decode url and split to array

let list = document.getElementById("movieList"); // define ul item to add movies to

window.onload = function() {
    if (matchedMovies < 1) {
        document.getElementById("info-text").innerText = "Oh no, you had no movies in common.\n";
        document.getElementById("movieList").style.visibility = "hidden";
    }
    else {
        matchedMovies.forEach(element => addItem(element));
    }
}

// add each movie string to list
function addItem(item) {
    let le = document.createElement('li');
    le.textContent = item;
    list.appendChild(le);
}

function toHome() {
    window.location.href = "home";
}