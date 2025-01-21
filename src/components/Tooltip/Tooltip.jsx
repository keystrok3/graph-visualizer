

const Tooltip = ({ nodetype}) => {

    return (
        <div style={{
            width: "50px",
            padding: ".25em",
            border: "1px solid #242424",
            position: "absolute"
        }}>
            { nodetype === "start" ? "Start Node" : "End Node"}
        </div>
    )
}

export default Tooltip