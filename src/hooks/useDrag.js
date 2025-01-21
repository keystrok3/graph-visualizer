

/**
 * Custom hook to provide dragging function
*/

// useDrag.js
const useDrag = () => {
    function dragStartHandler(ev) {
        ev.dataTransfer.setData("text/plain", ev.target.id)
        ev.dataTransfer.setData("application/my-app", ev.target.id)
        ev.dataTransfer.dropEffect = "move"
    }

    function dropHandler(ev) {
        ev.preventDefault()
        const data = ev.dataTransfer.getData("text/plain") || 
                    ev.dataTransfer.getData("application/my-app")
        return data
    }

    function handleDrop(e, rowIndex, colIndex, start_node, end_node, setGrid) {
        e.preventDefault()

        const draggedId = dropHandler(e)
        if (!draggedId) return

        // extract coordinates from dragged element's id
        const [ oldRow, oldCol ] = draggedId.split(",").map(Number)

        console.log(oldRow, oldCol)

        // determine if we're moving start or end node
        if (oldRow === start_node.current.x && oldCol === start_node.current.y) {
            start_node.current = { x: rowIndex, y: colIndex }
        } else if (oldRow === end_node.current.x && oldCol === end_node.current.y) {
            end_node.current = { x: rowIndex, y: colIndex }
        }
        setGrid(prev => [ ...prev ])
    }

    return { dragStartHandler, dropHandler, handleDrop }
}

export default useDrag