import { create } from "zustand";


const useNotification = create((set) => ({
    message: '',
    type: 'info',
    show: false,
    setMessage: (message) => set({ message }),
    setType: (type) => set({ type }),
    setShow: (show) => set({ show }),
    showNotification: (message, type) => {
        set({ message, type, show: true })
        setTimeout(() => {
            set({ show: false })
        }, 3000)
    }
}))

export default useNotification;