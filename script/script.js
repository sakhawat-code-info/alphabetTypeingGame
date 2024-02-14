
// function playNow() {
//     const homePage = document.getElementById('homePage');
//     homePage.classList.add('hidden');
//     const playGroundPage = document.getElementById('playGroundPage');
//     playGroundPage.classList.remove('hidden');
// }


// উপরের কোড কমেন্ট করা হইছে কারন আমরা শুধু ফানশন দিয়ে কাজ করব
// যার জন্য একটা ইউটিলিটি ক্লাস নিয়েছি। ঐ খানে শুধু ফানশন লিখব আর
// এই খানে কল করব 

function continueGame() {
    const alphabet = getARandomAlphabet();
    const display = document.getElementById('display');
    display.innerText = alphabet
}

function playNow() {
    hiddenById('homePage');
    showById('playGroundPage');
    continueGame();
}































