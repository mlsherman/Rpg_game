import characterData from './data.js'
import Character from './Character.js'

let monstersArray = ["orc", "demon", "goblin", "ogre", "werewolf", "hobgoblin"]
let isWaiting = false

function getNewMonster() {
    const nextMonsterData = characterData[monstersArray.shift()]
    return nextMonsterData ? new Character(nextMonsterData) : {}
}

// Wizard section
function spell() {
    if(!isWaiting){
        hero.setDiceHtml()
        monster.takeDamage2(hero.currentDiceScore)
        hero.manaUsage(hero.currentDiceScore)
        render()
        
        if(hero.dead){
            endGame()
        }
        else if(monster.dead){
            isWaiting = true
            if(monstersArray.length > 0){
                setTimeout(()=>{
                    monster = getNewMonster()
                    render()
                    isWaiting = false
                },1500)
            }
            else{
                endGame()
            }
            }
    }
} 

function attack() {
    if(!isWaiting){
        hero.setDiceHtml()
        monster.setDiceHtml()
        hero.takeDamage(monster.currentDiceScore)
        monster.takeDamage(hero.currentDiceScore)
        render()
        
        if(hero.dead){
            endGame()
        }
        else if(monster.dead){
            isWaiting = true
            if(monstersArray.length > 0){
                setTimeout(()=>{
                    monster = getNewMonster()
                    render()
                    isWaiting = false
                },1500)
            }
            else{
                endGame()
            }
        }    
    }
}

function endGame() {
    isWaiting = true
    const endMessage = hero.health === 0 && monster.health === 0 ?
        "Darkness envelopes the land..." :
        hero.health > 0 ? "The Hero Wins! All through the land peace has been restored." :
            "The monsters are Victorious. Darkness envelopes the land..."

    const endEmoji = hero.health > 0 ? "🔮" : "☠️"
        setTimeout(()=>{
            document.body.innerHTML = `
                <div class="end-game">
                    <h2>Go again?</h2> 
                    <h3>${endMessage}</h3>
                    <p class="end-emoji">${endEmoji}</p>
                </div>
                `
        }, 1500)
}

function noMana(){
     setTimeout(()=>{
        document.body.innerHTML = 'no mana!'
}, 1000)
}

// Knight section
function attack2() {
    if(!isWaiting){
        hero2.setDiceHtml()
        monster.setDiceHtml()
        if (hero2.health >= 60) {
          hero2.takeDamage(monster.currentDiceScore)  
        } else {
          hero2.takeDamage3(monster.currentDiceScore)
        }
        // hero2.takeDamage(monster.currentDiceScore)
        monster.takeDamage(hero2.currentDiceScore)
        render2()
        
        if(hero2.dead){
            endGame2()
        }
        else if(monster.dead){
            isWaiting = true
            if(monstersArray.length > 0){
                setTimeout(()=>{
                    monster = getNewMonster()
                    render2()
                    isWaiting = false
                },1500)
            }
            else{
                endGame2()
            }
        }    
    }
}

function endGame2() {
    isWaiting = true
    const endMessage = hero2.health === 0 && monster.health === 0 ?
        "Darkness envelopes the land..." :
        hero2.health > 0 ? "The Hero Wins! All through the land peace has been restored." :
            "The monsters are Victorious. Darkness envelopes the land..."

    const endEmoji = hero2.health > 0 ? "🔮" : "☠️"
        setTimeout(()=>{
            document.body.innerHTML = `
                <div class="end-game">
                    <h2>Go again?</h2> 
                    <h3>${endMessage}</h3>
                    <p class="end-emoji">${endEmoji}</p>
                </div>
                `
        }, 1500)
}

function armorPlate(){
    if (hero2.health <= 125) {
        hero2.health + 30
    }
}

document.getElementById("attack-button").addEventListener('click', attack)
document.getElementById("attack-button2").addEventListener('click', attack2)
document.getElementById("spell-button").addEventListener('click', function(){
    if (hero.mana >= 3){
        return spell()
    } 
})

let hero = new Character(characterData.hero)
let hero2 = new Character(characterData.hero2)
let monster = getNewMonster()

function render() {
    document.getElementById('hero').innerHTML = hero.getCharacterHtml()
    document.getElementById('monster').innerHTML = monster.getCharacterHtml()
}
   
function render2() {
    document.getElementById('hero2').innerHTML = hero2.getCharacterHtml()
    document.getElementById('monster').innerHTML = monster.getCharacterHtml()
}   


const wizardHero = document.getElementById('wizard').addEventListener('click', function(){  
    document.getElementById('hero').innerHTML = hero.getCharacterHtml()
    document.getElementById('monster').innerHTML = monster.getCharacterHtml()
})

const knightHero = document.getElementById('knight').addEventListener('click', function(joom){
    document.getElementById('hero2').innerHTML = hero2.getCharacterHtml()
    document.getElementById('monster').innerHTML = monster.getCharacterHtml()
})





