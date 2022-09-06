import React from "react";

import { moveShip, shoot } from '../util/moveAndFire'

export default function JoystickMobile({joystick, ship, fire, enemy, setEnemyLifeState, setShipLifeState}) {
    return (
        <>
            <div className="joystick" ref={joystick}>
                <div>
                    <button onClick={(e) =>{
                        e = 'a'
                        moveShip(e, ship.current)
                    }}>Left</button>
                    <button onClick={(e) =>{
                        e = 'd'
                        moveShip(e, ship.current)
                    }}>Rigth</button>
                </div>
                <div>
                    <button onClick={(e) =>{
                        e = 'Space'
                        shoot(e, fire.current, enemy.current, setEnemyLifeState, ship.current, setShipLifeState)
                    }}>Fire</button>
                </div>
            </div>
        </>
    )
}