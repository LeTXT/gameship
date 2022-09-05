let localWidth = window.innerWidth / 2
let localHeigth = window.innerHeight / 2 
let speed = 10

export const moveShip = (e, ship) => {
    console.log(localWidth)
    
    if(e === 'a' && localWidth >= 0) {
        localWidth = localWidth - 1 * speed
        ship.style.left = localWidth + 'px'
    } else if(e === 'd' && localWidth <= window.innerWidth) {
        localWidth = localWidth + 1 * speed
        ship.style.left = localWidth + 'px'
    } else if(e === 'w' && localHeigth >= 0) {
        localHeigth = localHeigth - 1 * speed
        ship.style.top = localHeigth + 'px'
    } else if(e === 's' && localHeigth <= window.innerHeight) {
        localHeigth = localHeigth + 1 * speed
        ship.style.top = localHeigth + 'px'
    }

}

export const initialize = (ship, fire, enemy) => {
    ship.style.top = localHeigth - 50 + 'px' 
    ship.style.left = localWidth - 50 + 'px'

    fire.innerHTML = ''  

    enemy.style.left = localWidth - 50 + 'px'


}

export const shoot = (e, fire, enemy) => {

    if(e === 'Space') {
        let newFire = document.createElement("div")
        newFire.classList.add('fire')
        console.log(newFire)
        
        fire.innerHTML = '' 
        fire.appendChild(newFire)
        console.log(fire)

        newFire.style.top = localHeigth + 50 + 'px'
        newFire.style.left = localWidth + 50 + 'px'
        
        newFire.style.display = 'block'
        newFire.style.animation = 'moveFire 0.5s ease'
        


        setTimeout(() => {
            
            if(newFire.getBoundingClientRect().x >= enemy.getBoundingClientRect().x && newFire.getBoundingClientRect().x < enemy.getBoundingClientRect().x + 100) {
                enemy.classList.remove('enemy')
            }
            
             
        }, 500);
    }
}

const destroyEnemy = async () => {

}