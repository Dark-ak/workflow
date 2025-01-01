
import useWorkFlowStore from '../utils/store'
import useNotification from '../utils/notification'



const Topbar = () => {

    const {savetoLocalStorage,deletefromLocalStorage} = useWorkFlowStore((state) => state)
    const showNotification = useNotification((state) => state.showNotification)

    const handleSave = () => {
        savetoLocalStorage()
        showNotification('Saved Successfully', 'success')
        alert('Saved Successfully')
    }

    const handleReset = () => {
        deletefromLocalStorage()
        window.location.reload()
    }

    return (
        <div className="mt-2 w-[100%] absolute top-0  p-2">
            <div className='py-3 px-4 shadow- rounded-xl bg-white border-2 border-black md:mx-10'>
                <div className='flex justify-between'>
                    <p className='text-2xl font-bold'>WorkFlow</p>
                    <div className='flex gap-2'>
                        <button className='bg-blue-500 text-white px-2 py-1 rounded-md flex gap-2' onClick={handleSave}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
                            </svg>
                            Save
                        </button>
                        <button className='bg-blue-500 text-white px-2 py-1 rounded-md flex gap-2' onClick={handleReset}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                            </svg>

                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar