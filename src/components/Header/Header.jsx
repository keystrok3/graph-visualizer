/* eslint-disable react/prop-types */

import { useContext } from 'react'
import './Header.css'
import { ControlsContext } from '../../context/controls.jsx'

const Header = ({ onMakeWall}) => {

    const { toggleAnimation, animationRunning } = useContext(ControlsContext)

    return (
        <header className="header">
            <h1>Pathfinder</h1>

            <div className='tools'>
                <button onClick={onMakeWall} id='make-wall'>Make Wall</button>
                <button onClick={toggleAnimation}>{ animationRunning ? "Stop" : "Start" }</button>
            </div>

        </header>
    )
}

export default Header