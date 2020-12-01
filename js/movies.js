
const imgSrc = "images/";
const jpg = ".jpg";
let movies = ["Avatar", "Insidious", "RV", "The Adventures of Wolf Boy", "The Fault In Our Stars", "The Hobbit"];
let user = [];
let user1 = [];
let matches = [];
let moviesIndex = 0;
let userIndex = 0;
let user1Index = 0;
let userFlag = 0; // 0 for user 1 for user1

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

function nextMovie() {
    if (moviesIndex < movies.length - 1) {
        moviesIndex++;
        document.getElementById("movie-name").innerText = movies[moviesIndex];
        document.getElementById("movie-img").src = imgSrc.concat(movies[moviesIndex]).concat(jpg);
    }
    else if (moviesIndex == movies.length - 1 && userFlag == 0) {
        setupNextUser();
    }
    else {
        findMatches();
        setCookie();
    }
}

function setupNextUser() {
    moviesIndex = 0;
    userFlag = 1;
    document.getElementById("movie-img").src = "";
    document.getElementById("movie-name").innerText = "Now for the 2nd person!";
    document.getElementById("start").style.visibility = "visible";
    document.getElementById("sike").style.visibility = "hidden";
    document.getElementById("like").style.visibility = "hidden";
}

function startNextUser() {
    document.getElementById("movie-img").src = imgSrc.concat(movies[moviesIndex]).concat(jpg);
    document.getElementById("movie-name").innerText = movies[moviesIndex];
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("sike").style.visibility = "visible";
    document.getElementById("like").style.visibility = "visible";
}

function findMatches() {
    for (i = 0; i < user.length; i++) {
        for (f = 0; f < user1.length; f++) {
            if (user[i] == user1[f]) {
                matches.push(user[i]);
                break;
            }
        }
    }
}

function setCookie() {
    var jsonarr = JSON.stringify(matches);
    document.cookie += "movieMatches=test;";
    alert(document.cookie);
    window.location.href = "C:/Users/Ryan/Development/CIS598-MovieMatch/partner.html"; //change to reflect actual webpage not local
}