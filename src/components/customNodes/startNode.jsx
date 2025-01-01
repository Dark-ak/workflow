/* eslint-disable react/prop-types */
// import { useCallback } from "react";
import { Handle, Position } from "@xyflow/react";

export default function StartNode({data}) {

    return (
        <div className="w-28 h-8 bg-green-500 rounded-lg flex flex-col shadow">
            <Handle type="source" position={Position.Bottom} />
            <div className="flex items-center justify-center h-full">
                <label htmlFor="" className="text-white">{data.label}</label>
            </div>
        </div>
    )
}