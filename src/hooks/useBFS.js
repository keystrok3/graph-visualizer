import { useCallback, useEffect, useRef } from "react"
import { getValidNeighbours } from "../utils/get_neighbours"


const useBFS = (grid, start_node, end_node, setGrid, animation_running) => {
    const queue = useRef([ start_node.current ])
    const pathMap = useRef(new Map())
    const timeOutRef = useRef()
    const foundEnd = useRef(false)

    const animateBFS = useCallback((onStart) => {
        if(queue.current.length === 0 || foundEnd.current) {
            onStart()
            return clearTimeout(timeOutRef.current)
        }

        let current_node = queue.current.pop()
        
        if(current_node.x === end_node.current.x && current_node.y === end_node.current.y) {
            return clearTimeout(timeOutRef.current)
        }

        setGrid(prev => {
            
            let newGrid = prev.map(row => row.map(val => val))
            if(current_node.visited) return newGrid

            newGrid[current_node.x][current_node.y] = {
                ...newGrid[current_node.x][current_node.y],
                visited: true
            }

            // Add neighbours to queue
            const neighbours = getValidNeighbours(current_node, grid)
            for(let neighbour of neighbours) {
                if(!queue.current.includes(neighbour) && !neighbour.isWall) {
                    queue.current.unshift(neighbour)
                    pathMap.current.set(neighbour, current_node)
                }
            }

            return newGrid
        })

        timeOutRef.current = setTimeout(() => animateBFS(setGrid), 10)
    }, [ end_node, animation_running ])

    useEffect(() => {
        if (!foundEnd.current && animation_running) {  // Only start animation if end not found
            timeOutRef.current = setTimeout(animateBFS, 10)
        }

        return () => clearTimeout(timeOutRef.current)
    }, [ grid, animation_running ])

    return { animateBFS }
}

export default useBFS