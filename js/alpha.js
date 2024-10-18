// function play(){
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playGroundSection = document.getElementById('play-ground');

//     playGroundSection.classList.remove('hidden');

// }
function handleKeyboardButtonPress(event){
    const playerPressed = event.key;

    // stop game
    if(playerPressed === 'Escape'){
        gameOver();
    }
    

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    

    if(playerPressed === expectedAlphabet){

        const currentScore = getTextElementValueById('current-score');
        // // new score
        const newScore = currentScore + 1;
        setTextElementValueById('current-score',newScore);

        // Update score 
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);

        // currentScoreElement.innerText = newScore;

        // start a new round
        removeBgColorById(expectedAlphabet);
        continueGame();         

    }
    else{

        const currentLife = getTextElementValueById('current-life');
        const newLife = currentLife - 1;
        setTextElementValueById('current-life', newLife);


        if(newLife === 0){
            gameOver();

        }


        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // // new life
        // const newLife = currentLife - 1;
        // currentLifeElement.innerText = newLife;

    }



}



document.addEventListener('keyup', handleKeyboardButtonPress);


function continueGame(){
    const alphabet = getARandomAlphabet();
    

    // set random alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBgColorById(alphabet);


}

function play(){
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);



    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    // update score
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);
    // clear the last selected key
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBgColorById(currentAlphabet);

}