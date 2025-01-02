import { useCallback } from 'react';
import {
    ReactFlow,
    MiniMap,
    Background,
    useReactFlow,
} from '@xyflow/react';
import useWorkFlowStore from '../utils/store';
import { useShallow } from 'zustand/shallow';
import StartNode from './customNodes/startNode';
import EndNode from './customNodes/endNode';
import ProcessNode from './customNodes/processNode';
import DecisionNode from './customNodes/decisionNode';
import CustomNode from './customNodes/customNode';
import { useEffect } from 'react';
import { checkSave } from '../utils/checkSave';
import OutNode from './customNodes/outNode';




const startNode = { start: StartNode, end: EndNode, process: ProcessNode, decision: DecisionNode, custom: CustomNode, out: OutNode };



export default function Workflow() {

    const selector = (state) => ({
        nodes: state.nodes,
        edges: state.edges,
        onNodesChange: state.onNodesChange,
        onEdgesChange: state.onEdgesChange,
        onConnect: state.onConnect,
        addNode: state.addNode,
        onEdgeClick: state.onEdgeClick

    });

    const { nodes, edges, onNodesChange, onEdgesChange, onConnect, addNode, onEdgeClick } = useWorkFlowStore(useShallow(selector))
    const { screenToFlowPosition } = useReactFlow();


    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const onDrop = useCallback(
        (event) => {
            event.preventDefault();
            const nodeType = event.dataTransfer.getData('application/reactflow');
            let color;
            let label;
            if (nodeType == "out") {
                color = "#fed7aa"
                label = "Output"
            };
            if (nodeType == "process") {
                color = "#bfdbfe"
                label = "Process"
            }
            if (nodeType == "decision") {
                color = "#fef08a"
                label = "Decision"
            }

            const position = screenToFlowPosition({ x: event.clientX, y: event.clientY });
            const id = Date.now().toString()
            const newNode = {
                id: id,
                type: nodeType,
                position,
                data: {
                    id: id,
                    label: label, 
                    color: color,
                    et: '5',
                    type: nodeType
                }
            }

            addNode(newNode);
        },
        [addNode, screenToFlowPosition]
    )

    console.log(edges)   

    const origin = [0.2, 0.2];

    useEffect(() => {
        const handleBeforeUnload = (event) => {
            if (!checkSave(nodes, edges)) {
                const message = "Are you sure you want to leave? Your changes may not be saved.";
                event.returnValue = message;
                return message;
            }

        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    })


    return (
        <div style={{ width: '100%', height: '100vh' }} onDragOver={onDragOver} onDrop={onDrop}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={startNode}
                nodeOrigin={origin}
                fitView="auto"
                onNodeClick={(event, node) => console.log('click', node)}
                onEdgeClick={(event, edge) => onEdgeClick(event, edge)}
            >
                <MiniMap />
                <Background variant="dots" gap={20} size={1} bgColor='#F5F5F5' />
            </ReactFlow >
        </div>
    )
}