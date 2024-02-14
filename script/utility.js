function hiddenById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}


function getARandomAlphabet() {
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const alphabet = alphabetString.split('');

    const randomIndex = Math.round(Math.random() * 25);
    return alphabet[randomIndex];
}



console.log();