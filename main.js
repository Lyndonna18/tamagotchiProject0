const feedEl= document.getElementById("fButton");
const sleepEl= document.getElementById("sButton");
const playEl= document.getElementById("pButton");


const hunEl= document.getElementById("hun");
const borEl= document.getElementById("bor");
const sleEl= document.getElementById("sle");
const ageEl= document.getElementById("age");
const staEl= document.getElementById("sta");

let pet_stats ={
    "Hunger" : 0,
    "Boredom" : 0,
    "Sleep" : 0,
    "Age" : 0,
    "Alive" : true,
}



function feedClicked(){
    let food = 6;
    if(food>=10){
        console.log("Your pet died! You let your pet play too much!")
    }   
};

function sleepClicked(){
    let sleep =6;
    if(sleep>=10){
        console.log("Your pet died! You let your pet sleep too much!")
    }   

};

function playClicked(){
    let play =6;
    if(play>=10){
        console.log("Your pet died! You let your pet play too much!")
    }   
};

feedEl.addEventListener('click', feedClicked);
sleepEl.addEventListener('click', sleepClicked);
playEl.addEventListener('click', playClicked);
