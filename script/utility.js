function hiddenById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBgColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400')
}
function removeBgColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400')
}

function getARandomAlphabet() {
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const alphabet = alphabetString.split('');

    const randomIndex = Math.round(Math.random() * 25);
    return alphabet[randomIndex];
}



console.log();