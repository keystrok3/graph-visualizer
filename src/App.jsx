import Board from './components/Board/Board.jsx'
import Header from './components/Header/Header.jsx'
import { useState } from 'react'
import './App.css'

const App = () => {
  const [ buildingWall, setBuildingWall ] = useState(false)

  const handleMakeWall = () => {
    setBuildingWall(prev => !prev)
  }

  return <div className="App">
    <Header onMakeWall={handleMakeWall} />
    <Board buildingWall={buildingWall}/>
  </div>
}

export default App