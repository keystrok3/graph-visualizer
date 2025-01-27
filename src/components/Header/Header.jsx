/* eslint-disable react/prop-types */

import { useContext } from 'react'
import './Header.css'
import { ControlsContext } from '../../context/controls.jsx'

const Header = () => {

    const { 
        toggleAnimation, 
        animationRunning,
        wallMode,
        toggleWallMode
    } = useContext(ControlsContext)

    return (
        <header className="header">
            <h1>Pathfinder</h1>

            <div className='tools'>
                <button onClick={toggleWallMode} id='make-wall'>{ wallMode ? "Wall Mode ON" : "Wall Mode OFF"}</button>
                <button onClick={toggleAnimation}>{ animationRunning ? "Stop" : "Start" }</button>
            </div>

        </header>
    )
}

export default Header