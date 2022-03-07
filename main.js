const feedEl= document.getElementById("fButton");
const sleepEl= document.getElementById("sButton");
const playEl= document.getElementById("pButton");


const hunEl= document.getElementById("hun");
const borEl= document.getElementById("bor");
const sleEl= document.getElementById("sle");
const ageEl= document.getElementById("age");
const staEl= document.getElementById("sta");

petStatsUpdates(){
    let petStats ={
    "Hunger" : 0,
    "Boredom" : 0,
    "Sleep" : 0,
    "Age" : 0,
    "Alive" : true,
    }
}
$('.feedButton').click(feedClicked);
$('.sleepButton').click(sleepClicked);
$('.playButton').click(playClicked);


function feedClicked(){
    petStats['Hunger'] = petStats['Hunger'] - 1;
    petStats['Sleep'] = petStats['Sleep'] + 1;
    petStatsUpdates();
    }   
};

function sleepClicked(){
    petStats['Boredom'] = petStats['Boredom'] + 1;
    petStats['Hunger'] = petStats['Hunger'] + 1;
    petStats['Sleep'] = petStats['Sleep'] - 1;
    petStatsUpdates();
    }
};

function playClicked(){
    petStats['Hunger'] = petStats['Hunger'] + 1;
    etStats['Boredom'] = petStats['Boredom'] - 1;
    petStats['Sleep'] = petStats['Sleep'] + 2;
    petStatsUpdates();
    }
};

feedEl.addEventListener('click', feedClicked);
sleepEl.addEventListener('click', sleepClicked);
playEl.addEventListener('click', playClicked);
