
// function playNow() {
//     const homePage = document.getElementById('homePage');
//     homePage.classList.add('hidden');
//     const playGroundPage = document.getElementById('playGroundPage');
//     playGroundPage.classList.remove('hidden');
// }


// উপরের কোড কমেন্ট করা হইছে কারন আমরা শুধু ফানশন দিয়ে কাজ করব
// যার জন্য একটা ইউটিলিটি ক্লাস নিয়েছি। ঐ খানে শুধু ফানশন লিখব আর
// এই খানে কল করব 



let scor = 0;
let life = 3;
document.addEventListener('keyup', function (event) {
    const playerPress = event.key;
    const currentAlphabet = document.getElementById('display');
    const needToPress = currentAlphabet.innerText;
    const needToPressLowerCase = needToPress.toLowerCase();

    console.log(playerPress, needToPressLowerCase);

    if (playerPress === needToPressLowerCase) {
        scor += 1;
        const socrId = document.getElementById('scorId');
        socrId.innerText = scor;
        removeBgColorById(playerPress);
        continueGame();
    } else {
        if (life !== 1) {
            life -= 1;
            const lifeId = document.getElementById('lifeId');
            lifeId.innerText = life;
            removeBgColorById(playerPress);
            continueGame();
        } else {
            hiddenById('playGroundPage');
            showById('scorSectionId');
            const socrId = document.getElementById('finalScor');
            socrId.innerText = scor;
        }

    }

})





function continueGame() {
    const alphabet = getARandomAlphabet();
    const display = document.getElementById('display');
    display.innerText = alphabet;
    setBgColorById(alphabet);

}

function playNow() {
    hiddenById('homePage');
    showById('playGroundPage');
    continueGame();
}


// function playAgain() {
//     scor = 0;
//     hiddenById('scorSectionId');
//     showById('playGroundPage');
//     continueGame();
// }




























