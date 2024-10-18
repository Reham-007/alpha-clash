// hide element function 
function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');

}

// show element function 
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');

}

function setBgColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400')

}
function removeBgColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400')
}


function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;

}

function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}


function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;

}

function getARandomAlphabet(){
    // alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('');
    
    

    // get a random index between 0 to 25
    const randomIndex = Math.round(Math.random()*25);
    

    const alphabet = alphabets[randomIndex];
    
    return alphabet;
    
}