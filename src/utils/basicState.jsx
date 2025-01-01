import { create } from "zustand"

const isEdit = create((set) => ({
    visibility: false,
    setVisiblity: (value) => set({visibility: value }),
}))

export default isEdit;