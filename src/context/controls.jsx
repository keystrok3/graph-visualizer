import { createContext, useState } from "react"



export const ControlsContext = createContext()

const ControlsProvider = ({ children }) => {

    const [ animationRunning, setAnimationRunning ] = useState(false)
    const [ wallMode, setWallMode ] = useState(false)

    const toggleAnimation = () => {
        setAnimationRunning(prev => !prev)
    }

    const toggleWallMode = () => {
        setWallMode(prev => !prev)
    }

    return (
        <ControlsContext.Provider
            value={{
                toggleAnimation,
                animationRunning,
                wallMode,
                toggleWallMode
            }}
        >{ children }</ControlsContext.Provider>
    )
}

export default ControlsProvider