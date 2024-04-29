//dom capture into variables
//main container
const stageOneContainer = document.getElementById("stage1");
const stageTwoContainer = document.getElementById("stage2");
const stageThreeContainer = document.getElementById("stage3");

//fighters container
const itemsCont = document.getElementById("fightersContainers");
const items = itemsCont.getElementsByClassName("fighterContainer");

//iteration that allows to click on diff items and show them as selected
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.classList += " active";
  });
}

//element hover effect
function hoverIn(hoverElem) {
  hoverElem.style.border = "solid 3px #b84509";
  hoverElem.style.transition = ".5s";
  hoverElem.classList.remove("none");
  hoverElem.classList.add("hovered");
}
function hoverOut(hoverElem) {
  hoverElem.style.border = "solid 3px #ffe81f";
  hoverElem.classList.remove("hovered");
  hoverElem.classList.add("none");
}

//figter variable selection
let chosenFighter;
let cpuFighter;

function selectedFighter(selected) {
  chosenFighter = selected;
}

// btn funtionality
const selectBtn = document.getElementById("selector");
const fightBtn = document.getElementById("fight");
//const resetBtn = document.getElementById("reset");

selectBtn.addEventListener("click", () => {
  if (chosenFighter != undefined) {
    selectBtn.style.transition = "all 1s";
    selectBtn.style.opacity = "0";
    setTimeout(function () {
      selectBtn.classList.replace("d-inline", "d-none");
      fightBtn.classList.replace("d-none", "d-inline");
    }, 1000);
  } else {
    alert("Please select a fighter");
  }
});

// resetBtn.addEventListener("click", () => {
//   location.reload();
// });
function reset (){
    location.reload();
}

//Fighting section, includes variables with the different fighters
const fighterRock = `<div class="card-fighters rounded-4 fighterContainer">
    <img src="images/rock.jpg" class="card-img-top rounded-top-4" alt="Rock image that looks like Arturitu  tututuuu">
    <div class="card-body">
        <h5 class="card-fighter-title text-center text-white fs-4">Rock</h5>
    </div>
</div>`;

const fighterPaper = `<div class="card-fighters rounded-4 fighterContainer">
    <img src="images/Paper.jpg" class="card-img-top rounded-top-4" alt="...">
    <div class="card-body">
        <h5 class="card-fighter-title text-center text-white fs-4">Paper</h5>
    </div>
</div>`;
const fighterScissor = `<div class="card-fighters rounded-4 fighterContainer">
    <img src="images/scissors.jpg" class="card-img-top rounded-top-4" alt="...">
        <div class="card-body  text-center">
            <h5 class="card-fighter-title text-white fs-4">Scissor</h5>
        </div>
    </div>`;

//winning rules section including player status

const rules ={
    "scissors": "paper",
    "paper" : "rock",
    "rock" : "scissors"
}
let winner = false;


// function that return the chossenFighter into the variables with the html container

const playerSelection = () => {
  if (chosenFighter === "rock") {
    return fighterRock;
  }
  if (chosenFighter === "paper") {
    return fighterPaper;
  }
  if (chosenFighter === "scissors") {
    return fighterScissor;
  }
};

/// randomizer for the CPU selection
const randomizer = Math.ceil(Math.random() * 3);

///randomizer to character selection

const cpuSection = () => {
  if (randomizer == 1) {
    cpuFighter = "rock";
    return fighterRock;
  }
  if (randomizer == 2) {
    cpuFighter = "paper";
    return fighterPaper;
  }
  if (randomizer == 3) {
    cpuFighter = "scissors";
    return fighterScissor;
  }
};

// stage 3 content


fightBtn.addEventListener("click", () => {
  stageOneContainer.classList.replace("d-flex", "d-none");
  stageTwoContainer.classList.replace("d-none", "d-flex");
  stageTwoContainer.innerHTML = `
    <div class="main-title fs-1 text-center m-3">
        <h1>Fighting!!!</h1>
    </div>
    <div class="fighting-container d-flex justify-content-evenly align-items-center">
    
        ${playerSelection()} 
    
        <div class="vs-title fs-1 text-center">
            <h1>VS</h1>
        </div> 
    
        ${cpuSection()}
    </div>`;

    


  setTimeout(() => {
    stageTwoContainer.classList.replace("d-flex", "d-none");
    stageThreeContainer.classList.replace("d-none", "d-flex");
    test()
  }, 500);
});

function test() {
    if(chosenFighter === cpuFighter){
        stageThreeContainer.innerHTML = `<div class="main-title fs-1 text-center m-3">
        <h1>A draw, it is. Much balance, I sense. Wise choice, continue we shall.</h1>
    </div>
    <div class="card-result rounded-4 fighterContainer">
    <img src="images/yoda-Draw.webp" class="card-img-top rounded-top-4" alt="...">
        <div class="card-body  text-center">
        <button type="button" class="btn w-25 m-5  fs-4 fw-bolder " id="reset" onClick="reset()">
            Reset
        </button>
        </div>
    </div>`
    }else if(cpuFighter === rules[chosenFighter]){
        stageThreeContainer.innerHTML = `<div class="main-title fs-1 text-center m-3">
        <h1>Victory, you have. Triumphant, you stand. The Force, strong with you, it is.</h1>
    </div>
    <div class="card-result rounded-4 fighterContainer">
    <img src="images/yoda-feliz.webp" class="card-img-top rounded-top-4" alt="...">
        <div class="card-body  text-center">
        <button type="button" class="btn w-25 m-5  fs-4 fw-bolder " id="reset" onClick="reset()">
            Reset
        </button>
        </div>
    </div>`
    }else{
        stageThreeContainer.innerHTML = `<div class="main-title fs-1 text-center m-3">
        <h1>Lost, you have. Learn from this, you must. Try again, you will.</h1>
    </div>
    <div class="card-result rounded-4 fighterContainer">
    <img src="images/yoda-triste.jpg" class="card-img-top rounded-top-4" alt="...">
        <div class="card-body  text-center">
        <button type="button" class="btn w-25 m-5  fs-4 fw-bolder " id="reset" onClick="reset()">
            Reset
        </button>
        </div>
    </div>`
    }
}