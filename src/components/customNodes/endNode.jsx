/* eslint-disable react/prop-types */
// import { useCallback } from "react";
import { Handle, Position } from "@xyflow/react";

export default function EndNode({data}) {

    return (
        <div className="w-28 h-8 bg-red-500 rounded-lg flex flex-col">
            <Handle type="target" position={Position.Top} />
            <div className="flex items-center justify-center h-full">
                <label htmlFor="" className="text-white">{data.label}</label>
            </div>
        </div>
    )
}