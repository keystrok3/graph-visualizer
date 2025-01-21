# Pathfinding Algorithm Visualizer

An interactive web application for visualizing various pathfinding algorithms and maze generation techniques. Built with React, this tool helps users understand how different pathfinding algorithms work through visual demonstration.

## Features

### Pathfinding Algorithms
- Breadth-First Search (BFS) - Guarantees shortest path in unweighted graphs
- Dijkstra's Algorithm - Finds shortest path considering weighted edges
- A* Search - Uses heuristics to find optimal paths more efficiently
- More algorithms coming soon!

### Maze Generation
- Coming soon: Various maze generation algorithms
- Built-in maze solving visualization

### Interactive Grid
- Drag-and-drop functionality for start and end nodes
- Click and drag to create walls
- Clear and reset board functionality
- Dynamic grid visualization

## Getting Started

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/keystrok3/graph-visualizer.git

# Navigate to project directory
cd graph-visualizer

# Install dependencies
npm install

# Start development server
npm run dev
```

## Usage

1. **Grid Interaction**:
   - Drag the green node to set starting point
   - Drag the red node to set ending point
   - Click and drag on empty cells to create walls

2. **Algorithm Selection**:
   - Choose an algorithm from the dropdown menu
   - Click "Visualize" to see the algorithm in action
   - Use "Clear Board" to reset the visualization

3. **Controls**:
   - Play/Pause visualization
   - Adjust visualization speed
   - Clear path while keeping walls
   - Reset entire board

## Project Structure

```
src/
├── components/
│   ├── Board/             # Grid and node components
│   ├── Controls/          # Algorithm controls and settings
│   └── Visualizer/        # Algorithm visualization logic
├── algorithms/            # Implementation of pathfinding algorithms
├── hooks/                 # Custom React hooks (e.g., useDrag)
├── assets/               # Images and static resources
└── utils/                # Helper functions and constants
```

## Technical Implementation

- Built using React for efficient UI updates and state management
- CSS Grid for layout and node positioning
- Custom drag-and-drop implementation
- Optimized rendering using React hooks and memoization
- Modular architecture for easy algorithm additions

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Future Enhancements

- Additional pathfinding algorithms (Bidirectional Search, DFS)
- Maze generation algorithms
- Algorithm comparison tool
- Custom grid sizes
- Path statistics and metrics
- Tutorial mode for learning algorithms

## License

This project is licensed under the MIT License - see the LICENSE file for details.