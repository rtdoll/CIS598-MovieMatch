const urlParams = new URLSearchParams(window.location.search); //define object to get url params
const matchedMovies = decodeURI(urlParams.getAll('movieMatches')).split(","); // decode url and split to array

let list = document.getElementById("movieList"); // define ul item to add movies to

matchedMovies.forEach(element => addItem(element));

// add each movie string to list
function addItem(item) {
    let le = document.createElement('li');
    le.textContent = item;
    list.appendChild(le);
}