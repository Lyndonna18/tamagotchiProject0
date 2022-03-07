// Pulling all the HTML elements
const feedEl= document.getElementById("fButton");
const sleepEl= document.getElementById("sButton");
const playEl= document.getElementById("pButton");


const hunEl= document.getElementById("hun");
const borEl= document.getElementById("bor");
const sleEl= document.getElementById("sle");
const ageEl= document.getElementById("age");
const staEl= document.getElementById("sta");

// Creating an object and value pairs
function (){
    let petStats ={
    "Hunger" : 0,
    "Boredom" : 0,
    "Sleep" : 0,
    "Age" : 0,
    "Alive" : true,
    }
};

checkNUpdatePetStats();

$('.feedButton').click(feedClicked);
$('.sleepButton').click(sleepClicked);
$('.playButton').click(playClicked);

// Button Functions when clicked
function feedClicked(){
    petStats['Hunger'] = petStats['Hunger'] - 1;
    petStats['Sleep'] = petStats['Sleep'] + 1;
    petStatsUpdates();
    console.log("Feed Button Clicked")
};

function sleepClicked(){
    petStats['Boredom'] = petStats['Boredom'] + 1;
    petStats['Hunger'] = petStats['Hunger'] + 1;
    petStats['Sleep'] = petStats['Sleep'] - 1;
    petStatsUpdates();
};

function playClicked(){
    petStats['Hunger'] = petStats['Hunger'] + 1;
    etStats['Boredom'] = petStats['Boredom'] - 1;
    petStats['Sleep'] = petStats['Sleep'] + 2;
    petStatsUpdates();
};

// When to update petStats
checkNUpdatePetStats(){
checkConditionalHunger();
checkConditionalSleep();
checkConditionalBoredom();
petStatsUpdates();
};

// Function conditionals for when the counts are less than 1
checkConditionalHunger (){
    if(petStats['hunger']<1){
    petStats['hunger'] =1;
    return;
};
}
checkConditionalSleep (){
    if(petStats['sleep']<1){
        petStats['sleep'] =1;
        return;
    };
    }
checkConditionalBoredom (){
    if(petStats['boredom']<1){
        petStats['boredom'] =1;
        return;
    };
    }

// Function conditionals for when the counts gets to 10




petStatsUpdates(){
    $('.hunger').text(petStats['hunger']);
    $('.boredom').text(petStats['boredom']);
    $('.sleep').text(petStats['sleep']);
  }


// Click button lines
feedEl.addEventListener('click', feedClicked);
sleepEl.addEventListener('click', sleepClicked);
playEl.addEventListener('click', playClicked);

