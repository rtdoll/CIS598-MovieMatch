const urlParams = new URLSearchParams(window.location.search);
const matchedMovies = decodeURI(urlParams.getAll('movieMatches')).split(",");

console.log(typeof matchedMovies);
let list = document.getElementById("movieList");

matchedMovies.forEach(element => addItem(element));

function addItem(item) {
    let le = document.createElement('li');
    le.textContent = item;
    list.appendChild(le);
}