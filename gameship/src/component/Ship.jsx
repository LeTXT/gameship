import React from "react";


import shipImg from '../img/ship.svg'

export default function Ship({ship}) {


    return (
        <>
            <div className='ship' ref={ship}>
                <img src={shipImg} alt="ship" />
            </div>
        </>
    )
}