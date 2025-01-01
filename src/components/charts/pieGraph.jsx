
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import useWorkFlowStore from '../../utils/store';
import { shallow } from 'zustand/shallow';


const PieGraph = () => {
    let { nodes } = useWorkFlowStore((state) => state, shallow)
    const nodeData = nodes.map((node) => node.data).slice(2);
    // console.log(nodeData)
    const typeColors = {
        decision: "yellow",   // Blue
        process: "blue", // Green
        out: "orange",
        custom: "red"
        // Red
    };
    const executionTimeByType = nodeData.reduce((acc, node) => {
        console.log(node)
        if (!acc[node.type]) {
            acc[node.type] = 0;
        }
        acc[node.type] += parseInt(node.et);
        return acc;
    }, {});
    // Convert to array of objects
    console.log(executionTimeByType)
    const data = Object.entries(executionTimeByType).map(([type, time]) => ({
        type,
        executionTime: time,
        color: typeColors[type],
    }));
    console.log(data)
    return (
        <div className='flex items-center flex-col gap-4'>
            <div>
                <p className='text-xl font-bold'>Execution Time by Types</p>
            </div>
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    dataKey="executionTime"
                    nameKey="type"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    label={({ name, percent }) =>
                        `${name} (${(percent * 100).toFixed(0)}%)`
                    }
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </div>
    )
}

export default PieGraph