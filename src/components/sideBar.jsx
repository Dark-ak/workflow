import { useState } from 'react';

import isEdit from '../utils/basicState';
import useWorkFlowStore from '../utils/store';


const SideBar = () => {
    const [isSidebar, setSidebar] = useState(false)
    const {setVisiblity} = isEdit((state) => state)
    const {addNode} = useWorkFlowStore((state) => state)


    const handleDragStart = (e, type) => {
        e.dataTransfer.setData('application/reactflow', type);
        e.dataTransfer.effectAllowed = 'move';
    }
    const handlleAdd = (type) => {
        let color;
        let label
        if (type == "process"){
            color = "#bfdbfe"
            label = "Process"
        }
        else if (type == "out"){
            color = "#fed7aa"
            label = "Output"
        }
        else if (type == "decision"){
            color = "#fef08a"
            label = "Decision"
        }

        const newNode = {
            id: Date.now().toString(),
            position: { x: parseFloat(Math.random() * 100), y: parseFloat(100) },
            data: { label: label, color: color, et: '5' ,type: type},
            type: type,
        }

        addNode(newNode)

    }

    return (
        <div className=''>
            <aside className=''>
                <div className={`ml-5 lg:mx-10 min-w-[120px] lg:w-[300px] ${isSidebar ? "max-h-[100vh] lg:pb-10" : "max-h-[40px] lg:max-h-[60px]"} transition-all duration-500 overflow-hidden bg-white rounded-md px-4 lg:py-2 border-2 border-gray-200 ease-out`}>
                    <div className='flex items-center justify-between cursor-pointer py-1 lg:px-3 lg:py-1 rounded hover:bg-gray-200' onClick={() => setSidebar(!isSidebar)}>
                        <p className='text-lg lg:text-xl font-semibold  text-gray-600'>Create</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={`size-3 lg:size-5 text-gray-600 ${isSidebar ? 'transform rotate-180' : ''} duration-500`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>                          
                    </div>
                    <div className={`flex-col items-center gap-12 mx-2 hidden mt-4 lg:flex`}>

                        <div className='h-24 w-24  align-middle bg-blue-200 border border-blue-500 text-white flex items-center justify-center rounded-full shadow' onClick={() =>handlleAdd("process")} onDragStart={(event) => handleDragStart(event, "process")} draggable>
                            <p>Process</p>
                        </div>

                        <div className='min-w-32 min-h-14 rounded border bg-orange-200 border-orange-500 text-white flex items-center justify-center shadow' onClick={() => handlleAdd("out")} onDragStart={(event) => handleDragStart(event, "out")} draggable>
                            <p>Output</p>
                        </div>

                        <div className="w-[100px] h-[100px] -rotate-45 bg-yellow-200 border-yellow-500 border text-white flex items-center justify-center" onClick={() =>handlleAdd("decision")} onDragStart={(event) => handleDragStart(event, "decision")} draggable>
                            <p className='rotate-45'>Decision</p>
                        </div>

                        <div className='border-dashed flex items-center justify-center border hover:bg-slate-200 border-gray-400 w-28 h-28 cursor-pointer' onClick={() => setVisiblity(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6 text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 lg:hidden  p-1' >
                        <p onClick={() =>handlleAdd("process")}>Process</p>
                        <hr />
                        <p onClick={() => handlleAdd("out")}>Output</p>
                        <hr />
                        <p onClick={() =>handlleAdd("decision")}>Decision</p>
                        <hr />
                        <p onClick={() => setVisiblity(true)}>Custom</p>
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default SideBar