let scoreHome = document.getElementById('score-home');
let homeCount = 0;

let scoreGuest = document.getElementById('score-guest');
let guestCount = 0;

let add1Home = document.getElementById('add-one-home');
add1Home.addEventListener('click', addOneH);

let add2Home = document.getElementById('add-two-home');
add2Home.addEventListener('click', addTwoH);

let add3Home = document.getElementById('add-three-home');
add3Home.addEventListener('click', addThreeH);

let add1Guest = document.getElementById('add-one-guest');
add1Guest.addEventListener('click', addOneG);

let add2Guest = document.getElementById('add-two-guest');
add2Guest.addEventListener('click', addTwoG);

let add3Guest = document.getElementById('add-three-guest');
add3Guest.addEventListener('click', addThreeG);

function addOneH() {
    homeCount++;
    scoreHome.textContent = homeCount;
}

function addOneG() {
    guestCount++;
    scoreGuest.textContent = guestCount;
}

function addTwoH() {
    homeCount += 2;
    scoreHome.textContent = homeCount;
}

function addTwoG() {
    guestCount += 2;
    scoreGuest.textContent = guestCount;
}

function addThreeH() {
    homeCount += 3;
    scoreHome.textContent = homeCount;
}

function addThreeG() {
    guestCount += 3;
    scoreGuest.textContent = guestCount;
}