/* eslint-disable react/prop-types */

import { Handle, Position } from '@xyflow/react'
import Toolbar from '../toolbar'
import chroma from 'chroma-js'

const OutNode = ({id,data}) => {
  
  const color = data.color
    return (
    <div className='min-w-32 min-h-14 rounded border bg-orange-200 border-orange-500 text-white flex items-center justify-center shadow' style={{backgroundColor: data.color, borderColor: chroma(data.color).darken(2)}}>
        <Handle
            type="target"
            position="top"
            id="out-target"
            
        />
        <Handle type="source" position={Position.Bottom} id='out-source' />
        <Toolbar id={id} data={data}    />
        {data.label}
    </div>
  )
}

export default OutNode