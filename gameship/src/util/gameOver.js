export const youWinOrLose = (stateEnemy, stateShip) => {

    if(stateEnemy === 0) {
        return 'You Win'
    } else if(stateShip === 0) {
        return 'You Lose'
    } else {
        return ''
    }
} 