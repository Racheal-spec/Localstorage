
//Define variables
const inputTag = document.getElementById('nameTag');
const saveButton = document.querySelector('.save-btn');
const Display = document.querySelector('.display');

//Eventlisteners
saveButton.addEventListener('click', saveBtn)
document.addEventListener('DOMContentLoaded', showSavedResult);

//Main function
function saveBtn(event){
    event.preventDefault();
    const displayName = document.createElement("p");
    displayName.classList.add('showName');
    displayName.innerText = inputTag.value;
    Display.appendChild(displayName);
    //console.log(finalResult.innerText);
    saveName(inputTag.value);
}
saveBtn();
//Local storage function
function saveName(){
    let results;
    if(localStorage.getItem('results') === null){
        results = [];
    }else{
    results = JSON.parse(localStorage.getItem("results"));
    }
    results.push(inputTag.value);
    localStorage.setItem("results", JSON.stringify(results));    

}

//A function that make sure the name remains on the screen even after reloading the page
function showSavedResult(result){
    let results;
    if(localStorage.getItem('results') === null){
        results = [];
    }else{
    results = JSON.parse(localStorage.getItem("results"));
}
    results.forEach(result => {
        const displayName = document.createElement("p");
        displayName.classList.add('showName');
        displayName.innerText = inputTag.value;
        Display.appendChild(displayName);
    });
}
  

