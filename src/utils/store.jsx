import {
    addEdge,
    applyNodeChanges,
    applyEdgeChanges,
    MarkerType
} from '@xyflow/react';
import { create } from 'zustand';
import useNotification from './notification';


const validateConnection = (sourceType, targetType) => {
    console.log(sourceType, targetType)
    // Define allowed connections here
    if (sourceType === 'start' && targetType === 'end') return true;
    if (sourceType == 'decision' && targetType == 'decision') return false; 
    if (sourceType == 'start' && targetType == 'decision') return false;
    if (sourceType == 'start' && targetType == 'out') return false;
    if (sourceType == 'out' && targetType == 'out') return false;
    return true; // Default to allow other connections
};

const useWorkFlowStore = create((set, get) => ({
    nodes: [{ id: '1', position: { x: 0, y: 0 }, data: { label: 'start' }, type: 'start' },
    { id: '2', position: { x: 0, y: 100 }, data: { label: 'end' }, type: "end" },
    ],
    edges: [],
    onNodesChange: (changes) => set({ nodes: applyNodeChanges(changes, get().nodes) }),
    onEdgesChange: (changes) => set({ edges: applyEdgeChanges(changes, get().edges) }),
    onConnect: (params) => {
        const state = get();
        const { nodes } = state;
        const { showNotification } = useNotification.getState();
        // Find source and target nodes
        const sourceNode = nodes.find((node) => node.id === params.source);
        const targetNode = nodes.find((node) => node.id === params.target);
        const edgeType = params.sourceHandle;
    
        // Ensure the edge has the correct type, default to 'smoothstep' if not specified
        params.type = params.type || 'smoothstep';
    
        // Set additional edge properties
        params.sourceLabel = sourceNode.data.label;
        params.targetLabel = targetNode.data.label;
        params.et = '5'; // Some value, ensure it's required
        params.markerEnd = {
            type: MarkerType.ArrowClosed,
            width: 20,
            height: 20,
            color: edgeType === 'No' ? 'red' : 'green',
        };
    
        // Validate the connection between the nodes
        if (validateConnection(sourceNode.type, targetNode.type)) {
            if (sourceNode.type === 'decision') {
                params.label = edgeType;
                params.labelStyle = {
                    padding: '5px',
                    borderRadius: '3px',
                    color: '#333',
                };
                params.style = {
                    stroke: edgeType === 'No' ? 'red' : 'green',
                };
            }
    
            // Add edge to state
            set({ edges: addEdge(params, get().edges) });
        }else{
            showNotification('Invalid connection', 'error');
        }
    },
    onEdgeClick: (event, edge) =>
        set((state) => {
            console.log(event)
            return {edges: state.edges.filter((e) => e.id !== edge.id)}
            
        }),
    addNode: (node) => set(({ nodes: [...get().nodes, node] })),
    deleteNode: (nodeId) =>
        set((state) => {
            const nodes = state.nodes.filter((node) => node.id !== nodeId);
            const edges = state.edges.filter(
                (edge) => edge.source !== nodeId && edge.target !== nodeId
            );
            return { nodes, edges };
        }),

    setNodes: (upadater) => set(({ nodes: upadater(get().nodes) })),
    savetoLocalStorage: () => {
        localStorage.setItem('nodes', JSON.stringify(get().nodes))
        localStorage.setItem('edges', JSON.stringify(get().edges))
    },
    loadfromLocalStorage: () => {
        const nodes = JSON.parse(localStorage.getItem('nodes'))
        const edges = JSON.parse(localStorage.getItem('edges'))
        if (nodes) set({ nodes })
        if (edges) set({ edges })
    },
    deletefromLocalStorage: () => {
        localStorage.removeItem('nodes')
        localStorage.removeItem('edges')
    }
}))



export default useWorkFlowStore;