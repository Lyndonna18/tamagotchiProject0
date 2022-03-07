const feedEl= document.getElementById("fButton");
const sleepEl= document.getElementById("sButton");
const playEl= document.getElementById("pButton");

const hunEl= document.getElementById("hun");
const borEl= document.getElementById("bor");
const sleEl= document.getElementById("sle");
const ageEl= document.getElementById("age");
const staEl= document.getElementById("sta");

function feedClick(){
    console.log("Feed button clicked")
};

function sleepClick(){
    console.log("sleep button clicked")
};

function playClick(){
    console.log("play button clicked")
};

feedEl.addEventListener('click', feedClick);
sleepEl.addEventListener('click', sleepClick);
playEl.addEventListener('click', playClick);
