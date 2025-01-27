/* eslint-disable react/prop-types */

import './Header.css'

const Header = ({ onMakeWall, onStart, running}) => {

    return (
        <header className="header">
            <h1>Pathfinder</h1>

            <div className='tools'>
                <button onClick={onMakeWall} id='make-wall'>Make Wall</button>
                <button onClick={onStart}>{ running ? "Stop" : "Start" }</button>
            </div>

        </header>
    )
}

export default Header