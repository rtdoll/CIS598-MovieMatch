const imgSrc = "images/";
const jpg = ".jpg";
let movies = ["Avatar", "Insidious", "RV", "The Adventures of Wolf Boy", "The Fault In Our Stars", "The Hobbit"];
let user1 = [];
let user2 = [];
let moviesIndex = 0;
let user1Index = 0;
let user2Index = 0;

function likeMovie() {
    user1.push(document.getElementById("movie-name"));
    user1Index++;
    nextMovie();
}

function nextMovie() {
    if (moviesIndex < movies.length - 1) {
        moviesIndex++;
        document.getElementById("movie-name").innerText = movies[moviesIndex];
        document.getElementById("movie-img").src = imgSrc.concat(movies[moviesIndex]).concat(jpg);
    }
}