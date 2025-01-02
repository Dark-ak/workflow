/* eslint-disable no-unused-vars */
import React from 'react'
import { LineChart,Label, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';
import useWorkFlowStore from '../../utils/store';


const getCumulativeTime = (edge, nodes) => {
  const sourceNode = nodes.find((node) => node.id === edge.source);
  const targetNode = nodes.find((node) => node.id === edge.target);

  const sourceTime = sourceNode?.data?.et ? parseInt(sourceNode.data.et) : 0;
  const targetTime = targetNode?.data?.et ? parseInt(targetNode.data.et) : 0;
  const edgeTime = edge?.et ? parseInt(edge.et) : 0;

  return sourceTime + targetTime + edgeTime;
};

const prepareChartData = (edges, nodes) => {
  const validEdges = edges.filter((edge) => {
    const sourceNode = nodes.find((node) => node.id === edge.source);
    const targetNode = nodes.find((node) => node.id === edge.target);
    return sourceNode && targetNode;
  });

  return validEdges
    .map((edge) => {
      const cumulativeTime = getCumulativeTime(edge, nodes);
      if (cumulativeTime === null) return null;

      const sourceNode = nodes.find((node) => node.id === edge.source);
      const targetNode = nodes.find((node) => node.id === edge.target);

      const sourceLabel = sourceNode?.data.label
      const targetLabel = targetNode?.data.label

      return { name: `${sourceLabel} -> ${targetLabel}`, time: cumulativeTime };
    })
    .filter((data) => data !== null);  // Remove any null data
};

const LineGraph = () => {
  const { edges, nodes } = useWorkFlowStore((state) => state);
  const chartData = prepareChartData(edges, nodes);
  return (
    <div className='flex flex-col items-center'>
      <p className='text-xl my-5 font-medium'>Execution time of Connections</p>

      <LineChart data={chartData} width={450} height={300}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis>
          <Label
            value="Execution t  ime in seconds"
            angle={-90}
            position={'center'}
          />
        </YAxis>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="time" stroke="#8884d8" />
      </LineChart>
    </div>
  )
}

export default LineGraph