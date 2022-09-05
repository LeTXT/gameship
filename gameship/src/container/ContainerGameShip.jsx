import React, { useState, useEffect, useRef } from "react";

import { moveShip, initialize, shoot } from '../util/moveAndFire'

import Ship from '../component/Ship'
import Fire from "../component/Fire";
import Enemy from '../component/Enemy'


export default function ContainerGameShip() {
    const [shipStatus, setShipStatus] = useState()

    const ship = useRef()
    const fire = useRef()
    const enemy = useRef()

    useEffect(() => {
        initialize(ship.current, fire.current, enemy.current)
        const keyDown = document.addEventListener('keydown', (e) => {
            
            moveShip(e.key, ship.current)
            
            shoot(e.code, fire.current, enemy.current)
            setShipStatus(ship)
        })
        
    }, [shipStatus])

    return (
        <>
        <div className="containerGameShip">
            <Ship ship={ship}/>
            <Fire fire={fire}/>
            <Enemy enemy={enemy}/>
        </div>
        </>
    )
}