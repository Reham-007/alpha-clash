// function play(){
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playGroundSection = document.getElementById('play-ground');

//     playGroundSection.classList.remove('hidden');

// }
function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    console.log(playerPressed);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

}

document.addEventListener('keyup', handleKeyboardButtonPress);


function continueGame(){
    const alphabet = getARandomAlphabet();
    console.log(alphabet);

    // set random alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBgColorById(alphabet);


}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}

