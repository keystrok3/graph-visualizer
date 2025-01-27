


export function getValidNeighbours(node, grid) {
    let neighbour_coordinates = [[-1, 0], [0, -1], [1, 0], [0, 1]]

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