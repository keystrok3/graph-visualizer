import Board from './components/Board/Board.jsx'
import Header from './components/Header/Header.jsx'
import { useState } from 'react'
import './App.css'

const App = () => {
  const [ buildingWall, setBuildingWall ] = useState(false)
  const [ running, setRunning ] = useState(false)

  const handleMakeWall = () => {
    setBuildingWall(prev => !prev)
  }

  const handleClickStart = () => {
    setRunning(prev => !prev)
  }

  return <div className="App">
    <Header 
      onMakeWall={handleMakeWall} 
      onStart={handleClickStart} 
      running={running}
    />
    <Board buildingWall={buildingWall} running={running} onStart={handleClickStart}/>
  </div>
}

export default App