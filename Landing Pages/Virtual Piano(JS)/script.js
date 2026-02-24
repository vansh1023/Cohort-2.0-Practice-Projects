let cards = document.querySelectorAll('.card');

function playSound(note){
    const audio = new Audio(`Sounds/${note}.mp3`);
    audio.play();
}

function activateKey(keyElement){
    keyElement.classList.add("active");
    setTimeout(() => {
        keyElement.classList.remove("active");
    }, 100)
}

cards.forEach((card) => {
    card.addEventListener('click', () => {
        let note = card.textContent;
        playSound(note);
        activateKey(card);
    })
});

document.body.addEventListener('keydown', (elem) => {
    let keyPressed = elem.key.toUpperCase();

    cards.forEach((card) => {
        if(card.textContent === keyPressed){
            let note = card.textContent;
            playSound(note);
            activateKey(card);
        }
    })
})