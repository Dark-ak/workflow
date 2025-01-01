import { useState } from 'react'
import BarGraph from './charts/barGraph'
import LineGraph from './charts/lineGraph'
import PieGraph from './charts/pieGraph'

const Charts = () => {
    const [isActive, setActive] = useState("bar")
    const [isChart, setIsChart] = useState(false)

    return (
        <div>
            <div className={`ml-5 lg:mx-10 ${isChart ? "max-h-[100vh] w-[500px] lg:pb-10" : "max-h-[40px] w-[300px] lg:max-h-[60px]"} transition-all duration-500 overflow-hidden bg-white rounded-md  py-2 border-2 border-gray-200 ease-out`}>
                <div className='flex items-center justify-between cursor-pointer lg:px-3 lg:py-1 rounded hover:bg-gray-200' onClick={() => setIsChart(!isChart)}>
                    <p className='text-lg lg:text-xl font-semibold  text-gray-600'>Charts</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={`size-3 lg:size-5 text-gray-600 ${isChart ? 'transform rotate-180' : ''} duration-500`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>

                <div className={`flex px-5 items-start justify-start my-4 `}>
                    <div className='flex bg-gray-300 rounded-lg shadow border-gray-50 border'>

                        <div>
                            <div className={` px-3 py-1 ${isActive == "bar" && "bg-white"} cursor-pointer`} onClick={() => setActive("bar")}>
                                Bar
                            </div>
                        </div>
                        <div>
                            <div className={`${isActive == "line" && "bg-white"} px-3 py-1 cursor-pointer`} onClick={() => setActive("line")}>
                                Line
                            </div>
                        </div>
                        <div>
                            <div className={` px-3 py-1 ${isActive == "pie" && "bg-white"} cursor-pointer`} onClick={() => setActive("pie")}>
                                Pie
                            </div>
                        </div>


                    </div>

                </div>
                <div className='px-8'>
                    {isActive == "bar" && <BarGraph />}
                    {isActive == "line" && <LineGraph />}
                    {isActive == "pie" && <PieGraph />}
                </div>
            </div>

        </div>
    )
}

export default Charts