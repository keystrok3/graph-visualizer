
import './Header.css'

const Header = ({ onMakeWall}) => {

    return (
        <header className="header">
            <h1>Pathfinder</h1>

            <div className='tools'>
                <button onClick={onMakeWall} id='make-wall'>Make Wall</button>
            </div>

        </header>
    )
}

export default Header