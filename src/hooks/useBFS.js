import { useRef } from "react"


const useBFS = (start_node, end_node) => {
    const queue = useRef([ start_node ])
    const pathMap = useRef(new Map())

    function animateBFS(setGrid) {
        // 1. Insert start node into front of queue
        // 2. Pop queue and call the value current_node
        // 3. Set the 'visited' property of current_node to true
        // 4. Insert the neighbours of current into queue
        // 5. Add (neighbour,currentNode) pairs into new Map
        // 6. If queue is not empty, go to 2

        let current_node = queue.current.pop()
        
        setGrid(prev => {
            let newGrid = prev.map(row => row.map(val => val))
            if(current_node.visited) return newGrid

            return newGrid.map(row => row.map(val => {
                if(val.x === current_node.x && val.y === current_node.y) {
                    return { ...val, visited: true }
                }
                return val
            }))
        })

        // Add neighbours to queue
        const neighbours = getValidNeighbours(node)
        for(let neighbour of neighbours) {
            queue.current.unshift(neighbour)
            pathMap.current.set(neighbour, current_node)
        }

    }
}

function getValidNeighbours(node) {
    let neighbours = [ 
        [-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,-1],[0,1],[1,1] 
    ].map(([ i, j ]) => {
        let new_val = { x: node.x + i, y: node.y + j }
        
        if(new_val.x > 19 || new_val.x < 0 || new_val.y < 0 || new_val.y > 39) {
            return
        }

        return new_val.filter(val => val === undefined)
    })

    return neighbours
}