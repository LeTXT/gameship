let localWidth = window.innerWidth / 2
let localHeigth = window.innerHeight - 150 
let speed = 10
let lifeEnemy
let lifeShip
let numberOfShots 
let newFire
let newFireEnemy
let numberOfShotsEnemy

export const initialize = (ship, fire, enemy) => {
    ship.style.top = localHeigth - 25 + 'px' 
    ship.style.left = localWidth - 25 + 'px'

    fire.innerHTML = ''  

    enemy.style.left = localWidth - 50 + 'px'

    lifeEnemy = 5
    lifeShip = 1


    numberOfShots = 0
    numberOfShotsEnemy = 0

}

export const moveShip = (e, ship) => {
    console.log(localWidth)
    console.log(e)
    
    if(e === 'a' && localWidth >= 10) {
        localWidth = localWidth - speed
        ship.style.left = localWidth + 'px'
    } else if(e === 'd' && localWidth <= 250) {
        localWidth = localWidth + speed
        ship.style.left = localWidth + 'px'
    } 
    // else if(e === 'w' && localHeigth >= 0) {
    //     localHeigth = localHeigth - 1 * speed
    //     ship.style.top = localHeigth + 'px'
    // } else if(e === 's' && localHeigth <= window.innerHeight) {
    //     localHeigth = localHeigth + 1 * speed
    //     ship.style.top = localHeigth + 'px'
    // }

}



export const shoot = (e, fire, enemy, set, ship, setShip) => {
    console.log(newFire)
     if(e === 'Space') {
        if(lifeEnemy < 1 || lifeShip < 1) {
            enemy.classList.add('enemy')
            ship.classList.add('ship')
            lifeEnemy = 5
            set(lifeEnemy)
            lifeShip = 1
            setShip(lifeShip)
            console.log('life 0')
            return 
        } else if(newFire !== undefined) {
            console.log('not undefined')
            return
        } else {
            numberOfShots++
        console.log(numberOfShots + 'shots')

        newFire = document.createElement("div")
        newFire.classList.add('fire')
        console.log(newFire)
        
        
        fire.appendChild(newFire)
        console.log(fire)

        newFire.style.top = localHeigth + 15 + 'px'
        newFire.style.left = localWidth + 15 + 'px'
        
        newFire.style.display = 'block'
        newFire.style.animation = 'moveFire 0.9s linear '
        }
        
        if(newFire !== undefined ) {
            setTimeout(() => {
                
               
                if(newFire.getBoundingClientRect().x >= enemy.getBoundingClientRect().x + 15 && newFire.getBoundingClientRect().x < enemy.getBoundingClientRect().x + 85) {
                    if(lifeEnemy === 1 && lifeEnemy > 0) {
                        lifeEnemy--
                        set(lifeEnemy)
                        enemy.classList.remove('enemy')
                        
    
                    } else if(lifeEnemy > 0){
                        lifeEnemy--
                        set(lifeEnemy)
                        
    
                    }
                }
                fire.innerHTML = '' 
                newFire = undefined
                 
            }, 900);

        }
    }
}

export const enemyShoot = (fireEnemy, enemy, ship, set) => {
    
    newFireEnemy = document.createElement("div")
    newFireEnemy.classList.add('enemyFire')
    

        setInterval(() => {
            console.log(lifeShip)
            if(lifeShip < 1 || lifeEnemy < 1) {
                return 
            } else {
            fireEnemy.appendChild(newFireEnemy)
            numberOfShotsEnemy++
            console.log(fireEnemy)
            
    
            newFireEnemy.style.left = enemy.getBoundingClientRect().x + 50 + 'px'
            newFireEnemy.style.top = enemy.getBoundingClientRect().y + 50 + 'px'
    
            newFireEnemy.style.display = 'block'
            newFireEnemy.style.animation = 'moveFireEnemy 0.9s linear'
    
            console.log(ship.getBoundingClientRect().x)
            console.log(newFireEnemy.getBoundingClientRect().x)
            return setTimeout(() => {
                if(newFireEnemy.getBoundingClientRect().x >= ship.getBoundingClientRect().x && newFireEnemy.getBoundingClientRect().x <= ship.getBoundingClientRect().x + 71) {
                    if(lifeShip === 1) {
                        ship.classList.remove('ship')
                        lifeShip = 0
                        set(lifeShip)
                    } else {
                        lifeShip--
                    }  
                }
                
                fireEnemy.innerHTML = '' 
                
            }, 800)
        }
        }, 3000)
    
    
}