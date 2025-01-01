/* eslint-disable react/prop-types */
import { useState } from "react"
import useWorkFlowStore from "../utils/store"



const EditNode = ({id, data,setEdit }) => {

    const {setNodes, nodes} = useWorkFlowStore((state) => state)
    const node = nodes.find((node) => node.id === id)
    const [label, setLabel] = useState(data.label)
    const [shape, setShape] = useState(data.shape)
    const [color, setColor] = useState(data.color)
    const [et, setEt] = useState(data.et)

    const editNode = () => {
        setNodes((prevNodes) =>
            prevNodes.map((node) =>
                node.id === id
                    ? {
                          ...node,
                          data: {
                              ...node.data,
                              label: label,
                              color: color,
                              shape: shape,
                              et: et,
                          },
                      }
                    : node
            )
        );

        setEdit(false)
    };
    console.log(node)

    return (
        <div className='bg-white border border-gray-200 px-4 py-3 rounded-md'>
            <div className='flex gap-4 flex-col'>
                <div className='flex flex-col gap-1'>
                    <p className='text-gray-500 '>Label: </p>
                    <input type="text" required className='focus:outline-none bg-gray-100 rounded px-3 py-1'  onChange={(e) => setLabel(e.target.value)} defaultValue={label}/>
                </div>

                <div className='flex items-center gap-4'>
                    {node && node.type == "custom" &&<div className='flex flex-col gap-1'>
                        <p className='text-gray-500 '>Shape: </p>
                        <select name="" id="" required className='focus:outline-none bg-gray-100 rounded px-3 py-1' onChange={(e) => setShape(e.target.value)} defaultValue={shape}>
                            <option value="square">Square</option>
                            <option value="rectangle">Rectangle</option>
                            <option value="circle">Circle</option>
                        </select>
                    </div>}
                    <div className='flex flex-col gap-1'>
                        <p className='text-gray-500 '>Color: </p>
                        <input type="color" className='focus:outline-none bg-gray-100 rounded px-3 py-1' onChange={(e) => setColor(e.target.value)} defaultValue={color}/>
                    </div>
                </div>

                <div>
                    <div>
                        <p className='text-gray-500 '>Execution Time(mins)</p>
                        <input type="number" className='focus:outline-none bg-gray-100 rounded px-3 py-1' onChange={(e) => setEt(e.target.value)} defaultValue={et}/>
                    </div>
                </div>

                <div className='flex gap-4'>
                    <button className='bg-blue-500  text-white px-4  py-1 rounded hover:bg-opacity-65' onClick={editNode}>Save</button>
                    <button onClick={() => setEdit(false)}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default EditNode