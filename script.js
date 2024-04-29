//dom capture into variables
//main container
const stageOneContainer = document.getElementById('stage1'); 
const stageTwoContainer = document.getElementById('stage2'); 

//fighters container
const itemsCont = document.getElementById('fightersContainers');
const items = itemsCont.getElementsByClassName('fighterContainer');

//iteration that allows to click on diff items and show them as selected
for(let i = 0; i < items.length; i++ ){
    items[i].addEventListener("click", function (){
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.classList += " active";
    })
}

//element hover effect
function hoverIn(hoverElem){
    hoverElem.style.border = 'solid 3px #b84509';
    hoverElem.style.transition = '.5s';
    hoverElem.classList.remove('none');
    hoverElem.classList.add('hovered')

}
function hoverOut(hoverElem){
    hoverElem.style.border = 'solid 3px #ffe81f';
    hoverElem.classList.remove('hovered');
    hoverElem.classList.add('none')
}

//figter variable selection
let chosenFighter;


function selectedFighter(selected){
    chosenFighter = selected;
}

// btn funtionality 
const selectBtn = document.getElementById('selector');
const fightBtn = document.getElementById("fight");
const resetBtn = document.getElementById("reset");

selectBtn.addEventListener("click", () =>{
    if(chosenFighter != undefined){
        selectBtn.style.transition = "all 1s";
    selectBtn.style.opacity = '0'
    setTimeout(function(){
        selectBtn.classList.replace("d-inline", "d-none");
        fightBtn.classList.replace("d-none", "d-inline");
        
    },1500)
    }else{
        alert("Please select a fighter")
    }
});

resetBtn.addEventListener("click", () => {
    location.reload();
});

//Fighting section, includes variables with the different fighters
const fighterRock = 
`<div class="card-fighters rounded-4 fighterContainer">
    <img src="images/rock.jpg" class="card-img-top rounded-top-4" alt="Rock image that looks like Arturitu  tututuuu">
    <div class="card-body">
        <h5 class="card-title text-center text-white fs-4">Rock</h5>
    </div>
</div>`;

const fighterPaper = 
`<div class="card-fighters rounded-4 fighterContainer">
    <img src="images/Paper.jpg" class="card-img-top rounded-top-4" alt="...">
    <div class="card-body">
        <h5 class="card-title text-center text-white fs-4">Paper</h5>
    </div>
</div>`;
const fighterScissor = 
`   <div class="card-fighters rounded-4 fighterContainer">
    <img src="images/scissors.jpg" class="card-img-top rounded-top-4" alt="...">
        <div class="card-body  text-center">
            <h5 class="card-title text-white fs-4">Scissor</h5>
        </div>
    </div>`;

const playerSelection = () => {
    if(chosenFighter === "rock"){
        return fighterRock;
    }
    if(chosenFighter === "paper"){
        return fighterPaper;
    }
    if(chosenFighter === "scissors"){
        return fighterScissor;
    }
}

fightBtn.addEventListener("click", () =>{
    stageOneContainer.classList.replace('d-flex', 'd-none');
    stageTwoContainer.classList.replace('d-none', 'd-flex');
    stageTwoContainer.innerHTML = `
    <div class="main-title fs-1 text-center m-3">
        <h1>Fighting!!!</h1>
    </div>
    <div class="luchadores d-flex justify-content-around align-items-center">
    
        ${playerSelection()} 
    
        <div class="vs-title fs-1 text-center">
            <h1>VS</h1>
        </div> 
    
        ${fighterPaper}
    </div>`
    console.log(chosenFighter)
});

