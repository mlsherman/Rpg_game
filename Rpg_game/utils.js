function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(() =>
        Math.floor(Math.random() * 6) + 1
    ) 
}

// const audioObj = new Audio("/audio/songOfWolves.mp3");

// audioObj.play();


const getPercentage2 = (remainingMana, maximumMana) => 
    (100 * remainingMana) / maximumMana

const getPercentage = (remainingHealth, maximumHealth) => 
    (100 * remainingHealth) / maximumHealth

function getDicePlaceholderHtml(diceCount) {
    return new Array(diceCount).fill(0).map(() =>
        `<div class="placeholder-dice"></div>`
    ).join("")
}

export { getDiceRollArray, getDicePlaceholderHtml, getPercentage, getPercentage2 }