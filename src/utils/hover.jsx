import { create } from "zustand";


const graphHover = create((set) => ({
    hover: null,
    setHover: (hover) => set({ hover: hover }),
}));

export default graphHover;