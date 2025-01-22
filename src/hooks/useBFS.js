import { useCallback, useEffect, useRef } from "react"


const useBFS = (grid, start_node, end_node, setGrid) => {
    const queue = useRef([ start_node.current ])
    const pathMap = useRef(new Map())
    const timeOutRef = useRef()
    const foundEnd = useRef(false)

    const animateBFS = useCallback(() => {
        if(queue.current.length === 0 || foundEnd.currents) {
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
                if(!queue.current.includes(neighbour)) {
                    queue.current.unshift(neighbour)
                    pathMap.current.set(neighbour, current_node)
                }
            }

            return newGrid
        })

        timeOutRef.current = setTimeout(() => animateBFS(setGrid), 30)
    }, [ end_node])

    useEffect(() => {
        if (!foundEnd.current) {  // Only start animation if end not found
            timeOutRef.current = setTimeout(animateBFS, 30)
        }

        return () => clearTimeout(timeOutRef.current)
    }, [ grid ])

    return { animateBFS }
}

function getValidNeighbours(node, grid) {
    let neighbour_coordinates = [[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,-1],[0,1],[1,1]]

    let neighbours = neighbour_coordinates.map(([ i, j ]) => {
            const newX = node.x + i
            const newY = node.y + j
            
            if(newX >= 0 && newX < 20 && newY >= 0 && newY < 40) {
                return grid[newX][newY]
            }
            return null
    }).filter(neighbour => neighbour && !neighbour.visited && !neighbour.isWall)

    return neighbours
}


export default useBFS