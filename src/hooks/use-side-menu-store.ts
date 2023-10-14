import { create } from "zustand";

interface UseSideMenuStore {
  isOpen: boolean;
  setOpen: () => void;
  setClose: () => void;
}

export const useSideMenuStore = create<UseSideMenuStore>((set) => ({
  isOpen: false,
  setOpen: () => set({ isOpen: true }),
  setClose: () => set({ isOpen: false }),
}));
