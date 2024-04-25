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
let chosenFighter = 'paper';


function selectedFighter(selected){
    chosenFighter = selected;
}

// btn funtionality 
const selectBtn = document.getElementById('selector');
const fightBtn = document.getElementById("fight");
const resetBtn = document.getElementById("reset");

selectBtn.addEventListener("click", () =>{
    selectBtn.style.transition = "all 1s";
    selectBtn.style.opacity = '0'
    setTimeout(function(){
        selectBtn.classList.replace("d-inline", "d-none");
        fightBtn.classList.replace("d-none", "d-inline");
        
    },1500)
});

resetBtn.addEventListener("click", () => {
    location.reload();
});

fightBtn.addEventListener("click", () =>{
    stageOneContainer.classList.replace('d-flex', 'd-none');
    stageTwoContainer.classList.replace('d-none', 'd-flex');
});

