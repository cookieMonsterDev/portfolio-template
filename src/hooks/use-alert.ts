import { create } from "zustand";

type Data = {
  title: string;
  description: string;
  action: Function;
};

type Alert = {
  isOpen: boolean;
  title: string | null;
  description: string | null;
  action: Function | null;
  onOpen: (data: Data) => void;
  onClose: () => void;
};

export const useAlert = create<Alert>((set) => ({
  isOpen: false,
  title: null,
  description: null,
  action: null,
  onOpen: (data) => set({ isOpen: true, ...data }),
  onClose: () =>
    set({ isOpen: false, title: null, description: null, action: null }),
}));
