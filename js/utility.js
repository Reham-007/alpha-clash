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

function getARandomAlphabet(){
    // alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('');
    
    

    // get a random index between 0 to 25
    const randomIndex = Math.round(Math.random()*25);
    

    const alphabet = alphabets[randomIndex];
    
    return alphabet;
    
}