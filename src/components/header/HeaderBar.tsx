import React, { useState } from 'react'
import './HeaderBar.css'


const HeaderBar = () => {
    const [color, setColor] = useState(false)

    return (
        <>
            <div className={color ? "header_container_light" : "header_container_dark"}>
                <p className={color ? "country_headline_light" : "country_headline_dark"}>Where is the world?</p>
                <button
                    className={color ? "button_container_light" : "button_container_dark"}
                    onClick={() => { setColor(!color) }}
                >
                    <i className="fa fa-moon-o" ></i>
                    Dark
                    Mode
                </button>
            </div>
        </>
    )
}

export default HeaderBar