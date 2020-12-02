const imgSrc = "images/";
const jpg = ".jpg";
const progressInc = 5;
let movies = ["A Christmas Story", "Black Widow", "Elf", "Frozen", "Knives Out", "The Climb", "The Godfather, Coda", "The Santa Clause", "True To The Game 2", "Wonder Woman 1984"];
let user = [];
let user1 = [];
let matches = [];
let moviesIndex = 0;
let userIndex = 0; // track movies liked by first user
let user1Index = 0; // track movies liked by second user
let userFlag = 0; // 0 for user 1 for user1

window.onload = function() {
    setStartMovie();
}

function setStartMovie() {
    document.getElementById("movie-img").src = imgSrc.concat(movies[moviesIndex]).concat(jpg);
    document.getElementById("movie-name").innerHTML = movies[0];
}

// add movie to users array if they liked it
function likeMovie() {
    if (userFlag == 0) {
        user.push(document.getElementById("movie-name").innerHTML);
        userIndex++;
    }
    else {
        user1.push(document.getElementById("movie-name").innerHTML);
        user1Index++;
    }
    nextMovie();
}

// changes movie image and name until end of list
function nextMovie() {
    if (moviesIndex < movies.length - 1) {
        moviesIndex++;
        document.getElementById("movie-name").innerText = movies[moviesIndex];
        document.getElementById("movie-img").src = imgSrc.concat(movies[moviesIndex]).concat(jpg);
    }
    // if at the end of movies for first user
    else if (moviesIndex == movies.length - 1 && userFlag == 0) {
        setupNextUser();
    }
    // second user has finished, displays submit button to get results
    else {
        findMatches();
        document.getElementById("sike").style.visibility = "hidden";
        document.getElementById("like").style.visibility = "hidden";
        document.getElementById("movie-img").src = "";
        document.getElementById("movie-name").innerText = "Press submit to get your results!";
        document.getElementById("submit").style.visibility = "visible";
    }
    updateProgressBar();
}

// reset index values and display prompt for second user
function setupNextUser() {
    moviesIndex = 0;
    userFlag = 1;
    document.getElementById("movie-img").src = "";
    document.getElementById("movie-name").innerText = "Now for the 2nd person!";
    document.getElementById("start").style.visibility = "visible";
    document.getElementById("sike").style.visibility = "hidden";
    document.getElementById("like").style.visibility = "hidden";
}

// set movies image/name and like/sike buttons for second user
function startNextUser() {
    setStartMovie();
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("sike").style.visibility = "visible";
    document.getElementById("like").style.visibility = "visible";
}

// find movies that both users liked
// then encode results to URI to pass to next page
function findMatches() {
    for (i = 0; i < user.length; i++) {
        for (f = 0; f < user1.length; f++) {
            if (user[i] == user1[f]) {
                matches.push(user[i]);
                break;
            }
        }
    }
    document.getElementById("movieData").value = encodeURI(matches);
}

function updateProgressBar() {
    let progress = parseInt(document.getElementById("progress-bar").style.width) + progressInc;
    document.getElementById("progress-bar").style.width = progress.toString().concat("%");
}
