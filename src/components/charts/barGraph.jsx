/* eslint-disable no-unused-vars */
import { CartesianGrid, BarChart, Bar, XAxis, YAxis, Tooltip, Cell, Label } from 'recharts';
import useWorkFlowStore from '../../utils/store';
import { shallow } from 'zustand/shallow';
import graphHover from '../../utils/hover';

const colour = {}


const BarGraph = () => {
  const { nodes } = useWorkFlowStore((state) => state, shallow)
  const { setHover, hover } = graphHover((state) => state)
  const data = nodes.map((node) => node.data).slice(2);
  return (

    <div className='flex flex-col items-center justify-center'>
      <p className='text-xl font-medium'>Execution time by each Node</p>
      <div className='mt-12'>
        <BarChart
          width={450}
          height={300}
          data={data}

        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis>
            <Label value="Execution time (in seconds)" angle={-90} position="center" />
            </YAxis>
          <Tooltip />
          <Bar dataKey="et" fill='#3b82f6' onMouseEnter={(entry, _) => { setHover(entry.id) }
          } onMouseLeave={() => setHover(false)} >


            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </div>
    </div>

  )
}

export default BarGraph