# Interactive Workflow and Analytics Dashboard

This project is a **React-based application** for building and analyzing workflows. It combines **drag-and-drop interactivity** with dynamic, data-driven visualizations. Built with **React Flow**, **Recharts**, and **Zustand**, the application is designed for a seamless and responsive user experience.

## Features

### Workflow Builder
- **Resizable and Zoomable Canvas**: Interactive workspace for creating workflows.
- **Draggable Nodes**: Includes node types like *Start, Task, Decision, End*.
- **Connections**: Supports directed edges between nodes.
- **Node Properties**: Editable attributes such as name, execution time, and type.
- **Validation**: Highlights disconnected or invalid workflows (e.g., multiple *Start* nodes).
- **Save and Load**: Local storage functionality with reload support.

### Analytics Dashboard
- **Bar Chart**: Displays execution time for each node.
- **Line Chart**: Visualizes cumulative execution times.
- **Pie Chart**: Represents execution time distribution by node type.
- **Dynamic Highlights**: Syncs node hover actions with charts and vice versa.

## Technology Stack
- **React**: Frontend library for building the UI.
- **React Flow**: For workflow creation and drag-and-drop interactivity.
- **Recharts**: Interactive and customizable charts for analytics.
- **Zustand**: State management for seamless data handling.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Dark-ak/workflow
   cd workflow
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm start
   ```

## Usage
- Open the application in your browser at `http://localhost:5173` or whatever host CLI provides.
- Drag nodes from the palette to the canvas and connect them to build a workflow.
- View analytics in real-time as the workflow evolves.

