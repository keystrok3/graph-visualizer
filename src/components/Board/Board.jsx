/* eslint-disable react/prop-types */
import startNode from '../../assets/startnode.svg'
import endNode from '../../assets/endnode.svg'
import useDrag from "../../hooks/useDrag"
import { memo, useContext, useEffect, useRef, useState } from "react"
import './Board.css'
import useBFS from '../../hooks/useBFS'
import { ControlsContext } from '../../context/controls'

const GRAPH_GRID = Array.from(
    { length: 20 }, (_, i) => {
        return Array.from({ length: 40 }, (_, j) => {
            return ({ x: i, y: j, visited: false, isWall: false })
        })
    })

/**
 * 40 by 40 grid representing graph
*/
const Board = () => {
    const [ grid, setGrid ] = useState([ ...GRAPH_GRID ])
    const [ mouseDown, setMouseDown ] = useState(false)
    const { 
        animationRunning, 
        toggleAnimation ,
        wallMode    
    } = useContext(ControlsContext)

    const start_node = useRef({ x: 7, y: 17 })
    const end_node = useRef({ x: 10, y: 3 })

    const { dragStartHandler, handleDrop } = useDrag()

    // Algo visualizer
    const { animateBFS } = useBFS(grid, start_node, end_node, setGrid, animationRunning)

    /**
     * Make a wall of invalid (that cannot be visited by the algorithm) nodes in the grid
    */
   const makeWall = (e) => {
        if(!wallMode) return
        if(mouseDown) {
            const row = Number(e.target.dataset.row)
            const col = Number(e.target.dataset.col)

            setGrid(prev => {
                let newGrid = prev.map(row => row.map(node => node))
                // check not to make start node or end node part of wall
                if((row === start_node.current.x && col === start_node.current.y) || 
                (row === end_node.current.x && col === end_node.current.y)) return newGrid

                newGrid[row][col].isWall = true
                return newGrid
            })
        }
   }
   
    useEffect(() => {
        if(animationRunning) {
            animateBFS(toggleAnimation)
        }
    }, [ animationRunning ])

    return (
        <div className="grid">
            {
                grid.map((row, i) => {
                    return row.map((col, j) => {
                        return (
                            <div
                                className={
                                    `tile ${col.isWall ? "wall" : col.visited ? "visited" : ""}`
                                }
                                key={`${i}${j}`} 
                                onDragEnter={(e) => e.preventDefault()} 
                                onDragOver={(e) => e.preventDefault()}
                                onDrop={(e) => handleDrop(e, i, j, start_node, end_node, setGrid)}
                                data-row={`${i}`}
                                data-col={`${j}`}
                                onMouseDown={() => setMouseDown(true)}
                                onMouseUp={() => setMouseDown(false)}
                                onMouseOver={(e) => makeWall(e)}
                            > 
                                {
                                    (i === start_node.current.x && j === start_node.current.y) ? 
                                    <img 
                                        id={`${i},${j}`} 
                                        draggable={true} 
                                        onDragStart={(e) => dragStartHandler(e)}
                                        src={startNode}
                                    /> :

                                    (i === end_node.current.x && j === end_node.current.y) ? 
                                    <img 
                                        id={`${i},${j}`} 
                                        draggable={true} 
                                        onDragStart={(e) => dragStartHandler(e)}
                                        src={endNode}
                                    /> : 
                                    <></>
                                }
                                
                            </div>
                        )
                    })
                })
            }
        </div>
    )
}

export default memo(Board)