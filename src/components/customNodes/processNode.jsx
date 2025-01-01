/* eslint-disable react/prop-types */
import { Handle, Position} from "@xyflow/react"
import Toolbar from "../toolbar"
import chroma from "chroma-js"                                              
import graphHover from "../../utils/hover"


export default function ProcessNode({ id, data }) {
    const hover = graphHover((state) => state.hover) 
    return (
    <div
        className="w-auto min-w-28 min-h-28 bg-blue-200 border border-blue-500 text-white flex items-center justify-center rounded-full shadow"
        style={{backgroundColor: data.color, borderWidth: hover==id ? 2 : 1, borderColor: hover == id ? "green" : chroma(data.color).darken(0.8).hex() }}
    >
        <label>{data.label}</label>
        <Toolbar id={id} data={data} />
        <Handle type="source" position={Position.Bottom} id="process-source" />
        <Handle type="target" position={Position.Top} id="process-target" />
    </div>
    )
}
