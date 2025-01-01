// useCheckSave.js
// checkSave.js
export const checkSave = (nodes, edges) => {

    const savedNodes = JSON.parse(localStorage.getItem("nodes"));
    const savedEdges = JSON.parse(localStorage.getItem("edges"));
    
    if (savedNodes && savedEdges) {
        const nodesMatch = JSON.stringify(nodes) === JSON.stringify(savedNodes);
        const edgesMatch = JSON.stringify(edges) === JSON.stringify(savedEdges);
        return nodesMatch && edgesMatch;
    }

    return false;
};
