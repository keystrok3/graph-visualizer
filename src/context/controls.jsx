import { createContext, useState } from "react"



export const ControlsContext = createContext()

const ControlsProvider = ({ children }) => {

    const [ animationRunning, setAnimationRunning ] = useState(false)


    const toggleAnimation = () => {
        setAnimationRunning(prev => !prev)
    }

    return (
        <ControlsContext.Provider
            value={{
                toggleAnimation,
                animationRunning
            }}
        >{ children }</ControlsContext.Provider>
    )
}

export default ControlsProvider