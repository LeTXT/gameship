import React, { useState, useEffect, useRef } from "react";

import { moveShip, initialize, shoot, enemyShoot } from '../util/moveAndFire'
import { youWinOrLose } from '../util/gameOver'

import Ship from '../component/Ship'
import Fire from "../component/Fire";
import Enemy from '../component/Enemy'
import EnemyFire from '../component/EnemyFire'
import JoystickMobile from "../component/JoystickMobile";


export default function ContainerGameShip() {
    const [shipStatus, setShipStatus] = useState()
    const [enemyLifeState, setEnemyLifeState] = useState(5)
    const [shipLifeState, setShipLifeState] = useState(1)

    const ship = useRef()
    const fire = useRef()
    const enemy = useRef()
    const enemyFire = useRef()
    const joystick = useRef()

    useEffect(() => {
        
        initialize(ship.current, fire.current, enemy.current)

        enemyShoot(enemyFire.current, enemy.current, ship.current,setShipLifeState)

        const keyDown = document.addEventListener('keydown', (e) => {
            
            moveShip(e.key, ship.current)
            
            shoot(e.code, fire.current, enemy.current, setEnemyLifeState, ship.current, setShipLifeState)
            setShipStatus(ship)
        })
        
        return () => enemyShoot()

    }, [shipStatus])

    return (
        <>
        <div className="containerGameShip">
            <div className="containerScreen">
            <div className="lifeEnemy">
                <h2>{enemyLifeState}</h2>
            </div>
            <div className="gameOver">
                <h2>{youWinOrLose(enemyLifeState, shipLifeState)}</h2>

            </div>
            <div className="containerGame">
            <Fire fire={fire}/>
            <Ship ship={ship}/>
            <EnemyFire enemyFire={enemyFire}/>
            <Enemy enemy={enemy}/>
            </div>
            </div>
            <div>
            <JoystickMobile joystick={joystick} ship={ship} fire={fire} enemy={enemy} setEnemyLifeState={setEnemyLifeState} setShipLifeState={setShipLifeState}/>
            </div>
        </div>
        </>
    )
}

