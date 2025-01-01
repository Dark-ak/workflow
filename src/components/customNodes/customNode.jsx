/* eslint-disable react/prop-types */
import { Handle, Position } from "@xyflow/react"
import Toolbar from '../toolbar'
import chroma from 'chroma-js'

const CustomNode = ({id, data}) => {
    console.log(data)
    return (
        <div
        className={` border-2 bg-opacity-65 ${ data.shape=="circle" && "rounded-full min-w-28 min-h-28"} ${data.shape=="square" && "min-w-20 min-h-20 rounded-none"} ${data.shape=="rectangle" && "min-w-32 min-h-16"} border-black text-white flex items-center justify-center shadow`}                                   
        style={{backgroundColor: data.color, borderColor: chroma(data.color).darken(2).hex()}}
    >
        <label>{data.label}</label>
        <Toolbar id={id} data={data} />
        <Handle type="source" position={Position.Bottom} id="custom-source" />
        <Handle type="target" position={Position.Top} id="custom-target" />
    </div>)
}

export default CustomNode