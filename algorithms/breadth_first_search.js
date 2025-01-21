
const graph = {
    A: [ "B", "C" ],
    B: [ "A", "F" ],
    C: [ "A", "E" ],
    D: [ "E", "G" ],
    E: [ "C", "D" ],
    F: [ "B" ],
    G: [ "K", "D" ],
    K: [ "B", "G" ]
}

const breadth_first_search = function (graph, start) {
    let visited = new Set()
    let queue = [ start ]
    let parentMap = new Map()

    while(queue.length > 0) {
        let current = queue.pop()
        visited.add(current)

        for(let neighbour of graph[current]) {
            if(visited.has(neighbour)) continue
            parentMap.set(neighbour, current)  // store parent node of every visited node
            queue.unshift(neighbour)
        }
    }
    
    return parentMap
}


function getPath(parentMap, endnode) {
    const path = []
    let currentNode = endnode

    while(currentNode !== undefined) {
        path.unshift(currentNode)
        currentNode = parentMap.get(currentNode)
    }

    return path
}

const parentMap = breadth_first_search(graph, "A")

const path = getPath(parentMap, "G")

console.log(path)