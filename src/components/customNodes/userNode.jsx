import { useState } from 'react'
import useWorkFlowStore from '../../utils/store'

import isEdit from '../../utils/basicState'


const randomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`
}

const UserNode = () => {
    const { visibility, setVisiblity } = isEdit((state) => state)
    const [label, setLabel] = useState('')
    const [shape, setShape] = useState('square')
    const [color, setColor] = useState(randomColor)
    const [et, setEt] = useState('5')

    const { addNode } = useWorkFlowStore((state) => state)

    const handleAddNode = (event) => {
        event.preventDefault()
        const newNode = {
            id: Date.now().toString(),
            position: { x: parseFloat(Math.random() * 100), y: parseFloat(100) },
            data: { label: label, shape: shape, color: color, et: et },
            type: 'custom',
        }

        addNode(newNode)
        handleClose()
    }

    const handleClose = () => {
        setLabel('')
        setShape('square')
        setColor(randomColor())
        setEt('5')
        setVisiblity(false)
        
    }


    return (
        <div className={`absolute top-0  lg:right-0 lg:bottom-0 p-4 ${visibility ? 'block' : 'hidden'}`}>
            <div className='bg-white relative p-4 rounded-xl shadow-lg border-2 border-gray-200 '>
                <p className='text-lg font-medium '>Create Node</p>
                <div className='my-2 flex flex-col gap-4'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-gray-500 '>Label: </p>
                        <input type="text" required className='focus:outline-none bg-gray-100 rounded px-3 py-1' value={label} onChange={(e) => setLabel(e.target.value)} />
                    </div>

                    <div className='flex items-center gap-4'>
                        <div className='flex flex-col gap-1'>
                            <p className='text-gray-500 '>Shape: </p>
                            <select name="" id="" required className='focus:outline-none bg-gray-100 rounded px-3 py-1' value={shape} defaultValue={shape} onChange={(e) => setShape(e.target.value)}>
                                <option value="square">Square</option>
                                <option value="rectangle">Rectangle</option>
                                <option value="circle">Circle</option>
                            </select>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p className='text-gray-500 '>Color: </p>
                            <input type="color" className='focus:outline-none bg-gray-100 rounded px-3 py-1' value={color} onChange={(e) => setColor(e.target.value)} />
                        </div>
                    </div>

                    <div>
                        <div>
                            <p className='text-gray-500 '>Execution Time(mins)</p>
                            <input type="number" className='focus:outline-none bg-gray-100 rounded px-3 py-1' value={et} onChange={(e) => setEt(e.target.value)} />
                        </div>
                    </div>

                    <div className='flex gap-4'>
                        <button className='bg-blue-500 text-white px-4  py-1 rounded hover:bg-opacity-65 ' onClick={handleAddNode} type='submit'>Create</button>
                        <button className='hover:bg-gray-100 px-2' onClick={handleClose}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserNode